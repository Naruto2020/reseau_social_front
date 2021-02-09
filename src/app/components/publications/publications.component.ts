import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  imgSite:string = environment.siteUrl;
  userDisplayName:string = "";

  images:string ;
  url1:string;
  compteur = 0;

  userFoundload;
  userFoundName;
  userFoundFol;
  userFoundId;

  aProp1:string;
  aProp2:string;
  aProp3:string;
  aProp4:string;
  aProp5:string;
  majTof:string;

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;
  friend:any;

  addImagePro = new FormGroup({
    _id : new FormControl(""),
    photo : new FormControl(""),
    loadBy : new FormControl("")
  });

  constructor(private bailService:BailService, private route: Router, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem("loggedUser");
    // on accède a la liste des utilisateurs en vu de récupérer l'id du post
    this.bailService.showProfils().subscribe((res) =>{
      //console.log(">>>",res);
      this.listesProfils = res;
      // on transforme le l'objet en tableau key/value
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      //console.log("new ...",newR);
      //console.log(Object.entries(res));
      for(let i=0; i< newR.length; i++){
        let tabA = newR[i][1].followers;
        let tab1 = newR[i][1].followings;
        let tabId = newR[i][1]._id;
        this.userFoundload = newR[i][1].username;
        if(this.userDisplayName === this.userFoundload){
          this.userFoundName = tabA;
          this.userFoundFol = tab1;
          this.userFoundId = tabId;
          for(let j=0; j<tabA.length;j++){
            this.compteur += 1;
            for(let k=0; k<tab1.length; k++){
              if(tab1[k] === tabA[j]){
                this.compteur -=1;
                
              }
            }
          }

        }
        //console.log("yooo",newR[i]);
        let tab = newR[i];
        for(let j=0; j<tab.length;j++){
          //console.log(tab[j].username);
          let obj = tab[j];
          //let objId = tab[j]._id;
          if(obj.username === localStorage.getItem("loggedUser")){
            this.aProp1 = obj.genre;
            this.aProp2 = obj.age;
            this.aProp3 = obj.preferences;
            this.aProp4 = obj.presentation;
            this.aProp5 = obj.amis;
            this.majTof = obj._id;

            //console.log("lolitapaz",this.aProp5);

          }
        }
      }  

    });
  }

  partage = new FormGroup({
    postId : new FormControl(""),
    message : new FormControl(""),
    date : new FormControl(""),
    loadBy: new FormControl(""),
  });

  poster(){
    this.bailService.publierMess(this.partage.value).subscribe(res =>{
      console.log("staus",res)
      this.partage.reset({});
      return res;
    });
  }

  selectImage(event){
    console.log(event);
    if(event.target.files.length > 0){
        const file = event.target.files[0];
      return this.images = file;
    }
      
  }

  
  formData1 = new FormData();
  chargement1(){
    this.formData1.append("photo",this.images);
    this.formData1.append("loadBy", localStorage.getItem("loggedUser"));
    this.bailService.uploadImage1(this.formData1).subscribe(res =>{
      console.log("Profil",res["photo"]);
      //this.alert1 = false;
      this.url1 = `${this.imgSite}/${res["photo"]}`;
      console.log(this.url1);
      return res;
    });
  }

  
}
