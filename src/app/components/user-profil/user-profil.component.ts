import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import {BailService} from '../../partages/bail.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  titre:String = "$wap-It";
  // variable qui va stocker le fichier image background et de profil
  images:string ;
  url:string ; //"http://127.0.0.1:3000/public/uploads/2020-12-23T16_23_57.110Zsanfrancisco.jpg";
  url1:string;  //"http://127.0.0.1:3000/public/uploads/2020-12-20T21_27_58.508ZIMG_3144.PNG";

  url3:string;
  url4:string;

  alert:boolean = false;
  alert1:boolean = false;
  connecter:boolean = false;

  aProp1:string;
  aProp2:string;
  aProp3:string;
  aProp4:string;
  majTof:string;
 

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;

  userDisplayName:string = "";

  addImage = new FormGroup({
    _id : new FormControl(""),
    photo : new FormControl(""),
    loadBy : new FormControl("")
  });

  constructor(private bailService:BailService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    
    this.bailService.displayImage().subscribe((res)=>{
      console.log(res)
       this.listeImages = res;
       //this.url = "";
       console.log("ici c est img Back -->",  res[Object.keys(res)[Object.keys(res).length - 1]].loadBy);
       console.log(Object.entries(res));
       for(let i=0; i< Object.entries(res).length; i++){
        console.log("haaa",Object.entries(res)[i]);
         let tab = Object.entries(res)[i];
         for(let j=0; j<tab.length; j++){
           //console.log(tab[j]);
           if(tab[j].loadBy === localStorage.getItem("loggedUser")){
             console.log("image >>",`http://127.0.0.1:3000/${tab[j].photo}`);
             this.url = `http://127.0.0.1:3000/${tab[j].photo}`;
           }
           
          }
       
        }
       /*if(res[Object.keys(res)[Object.keys(res).length - 1]].loadBy === localStorage.getItem("loggedUser")){
         this.url = `http://127.0.0.1:3000/${res[Object.keys(res)[Object.keys(res).length - 1]].photo}`;

       }*/
  
    });


    
    this.bailService.displayImage1().subscribe((res)=>{
      this.listeImagesPro = res;
      //this.url1 = "";
      console.log("ici c est img profil -->",  res[Object.keys(res)[Object.keys(res).length - 1]].photo);
      console.log(Object.entries(res));
      for(let i=0; i< Object.entries(res).length; i++){
        let tab = Object.entries(res)[i];
        for(let j=0; j<tab.length; j++){
          console.log("testyyy",typeof(tab[j]));
          if(tab[j].loadBy === localStorage.getItem("loggedUser")){
            console.log("image >>",`http://127.0.0.1:3000/${tab[j].photo}`);
            this.url1 = `http://127.0.0.1:3000/${tab[j].photo}`;
          }
          
         }
      
       }
      //this.url1 = `http://127.0.0.1:3000/${res[Object.keys(res)[Object.keys(res).length - 1]].photo}`;
    });
      
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
        //console.log("yooo",newR[i]);
        let tab = newR[i];
        for(let j=0; j<tab.length;j++){
          console.log(tab[j].username);
          let obj = tab[j];
          //let objId = tab[j]._id;
          if(obj.username === localStorage.getItem("loggedUser")){
            this.aProp1 = obj.genre;
            this.aProp2 = obj.age;
            this.aProp3 = obj.preferences;
            this.aProp4 = obj.presentation;
            this.majTof = obj._id;

          }
        }
      }  

    });
    this.userDisplayName = localStorage.getItem("loggedUser");
  }

    //on selectionne l'image à ajoutée 
    affiche(){
      this.alert = true;
    }
    affiche1(){
      this.alert1 = true;
    }
  
    selectImage(event){
      console.log(event);
      if(event.target.files.length > 0){
          const file = event.target.files[0];
        return this.images = file;
      }
        
    }
  
    //creation du fomulaire et ajout des valeurs saisies par l'utilisateur 
    formData = new FormData();
    chargement(){
        
        this.formData.append("photo", this.images);
        this.formData.append("loadBy", localStorage.getItem("loggedUser"));
        this.bailService.uploadImage(this.formData).subscribe(res =>{
          console.log(res["photo"]);
          this.alert = false;
          this.url = `http://127.0.0.1:3000/${res["photo"]}`;
          console.log(this.url);
          return res;
  
        });
  
        
      }
  
      chargement1(){
        this.formData.append("photo",this.images);
        this.formData.append("loadBy", localStorage.getItem("loggedUser"));
        this.bailService.uploadImage1(this.formData).subscribe(res =>{
          console.log(res["photo"]);
          this.alert1 = false;
          this.url1 = `http://127.0.0.1:3000/${res["photo"]}`;
          console.log(this.url1);
          return res;
        });
      }
  
      fermerAlert(){
        this.alert = false;
        this.alert1 = false;
      }

}
