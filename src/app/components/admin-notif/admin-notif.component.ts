import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-admin-notif',
  templateUrl: './admin-notif.component.html',
  styleUrls: ['./admin-notif.component.css']
})
export class AdminNotifComponent implements OnInit {

  titre:String = "$wap-It";
  imgSite:string = environment.siteUrl;

  userDisplayName:string = "";
  compteur = 0;

  userFoundName;
  userFoundAge;
  userFoundGenre;
  userFoundAbout;
  userFoundChoix;
  userFoundImg;
  userFoundImgA;
  userFoundBack;
  userFoundNom;
  userFoundId;
  userFoundFol;
  userFoundload

  pote;
  alert1:boolean = true;

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;
  friend:any;

  constructor(private bailService:BailService, private route: Router, private router : ActivatedRoute) { }

  ngOnInit(): void {

    this.userDisplayName = localStorage.getItem("loggedUser");
    // gestion du status de la demande d'amis 
    this.bailService.showProfils().subscribe((res) =>{
      console.log(">>>",res);
      this.listesProfils = res;
      // on transforme l 'objet res en tableau cle/valeur representant chaques Ut de la BDD 
      let newR = Object.keys(res).map(function(cle) {
            return [Number(cle), res[cle]];
      });
      //console.log("new ...",newR);
      //console.log(Object.entries(res));
      // on boucle sur le nouveau tableau pour recupérer chaque UT 
      for(let i=0; i< newR.length; i++){
        console.log("yooo",newR[i][1].followers);
        let tab = newR[i][1].followers;
        let tab1 = newR[i][1].followings;
        let tabID = newR[i][1]._id;
        this.userFoundload = newR[i][1].username;
        console.log("pseudo", this.userFoundload);
        //console.log(this.userDisplayName);
        if(this.userDisplayName === this.userFoundload){
          this.userFoundName = tab;
          this.userFoundFol = tab1;
          this.userFoundId = tabID;
          console.log("wath...",this.userFoundName);

        }
        if(this.userDisplayName === this.userFoundload){
          
          for(let j=0; j<tab.length;j++){
            this.compteur +=1;    
            //console.log("indiv",tab[j]);
            for(let k=0; k<tab1.length; k++){
              if(tab1[k] === tab[j]){
                this.compteur -=1;
              }
            }
            //console.log("tsuip", this.userDisplayName);
            //console.log("isolaaaaa",this.userFoundName);
          }
        }
      }
    
    });

    // gestion des images notifications 
    this.bailService.displayImage().subscribe((res) =>{
      this.listeImages = res;
      console.log("ici -->",res);
      //this.listesProfils = res;
      // on transforme le l'objet en tableau key/value
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      //console.log("new ...",newR); 
      this.userFoundBack = newR;
      for(let i=0; i<newR.length; i++){
        this.userFoundImgA = newR[i][1].loadBy;
        let tab = newR[i][1].photo;
        console.log("tabpho", this.userFoundImgA);
        //this.userFoundload = newR[i][1].loadBy;
        if(this.userFoundload !== this.userDisplayName){
          //this.userFoundBack = newR1;
          //console.log("check", this.userFoundBack)
        }
        
      }
    });
  }

  addAmis = new FormGroup({
    //sendBy : new FormControl(""),
    //acceptBy : new FormControl("")
    idToFollow: new FormControl("")
  });
  pullAmis = new FormGroup({
    //sendBy : new FormControl(""),
    //acceptBy : new FormControl("")
    idToUnFollow: new FormControl("")
  });

  valid(){
    console.log(this.userFoundId);
    
    console.log(this.addAmis.value);
    
    this.bailService.addFriend(this.userFoundId, this.addAmis.value).subscribe(res =>{
      console.log("alors", res);
      this.compteur -= 1;
      return res;
    });

  }

  cancel(){
    this.bailService.cancelFriend(this.userFoundId, this.pullAmis.value).subscribe(res =>{

      console.log(res);
      return res;
    });
    
  }

}
