import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';


@Component({
  selector: 'app-user-notif',
  templateUrl: './user-notif.component.html',
  styleUrls: ['./user-notif.component.css']
})
export class UserNotifComponent implements OnInit {
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
  userFoundAmis;
  userFoundload;

  pote;

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;

  friendV = new FormGroup({
    nom : new FormControl(''),
  });
  friendC = new FormGroup({
    nom : new FormControl(''),
  });

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
        //console.log("yooo",newR[i][1].amis);
        let tab = newR[i][1].amis;
        this.userFoundload = newR[i][1].username;
        console.log("pseudo", this.userFoundload);
        //console.log(this.userDisplayName);
        if(this.userDisplayName === this.userFoundload){
          this.userFoundName = tab;
          console.log("wath...",this.userFoundName);
          // gestion du compteur des notifications 
          for(let j=0; j<tab.length;j++){
            this.compteur +=1;    
            //console.log("indiv",tab[j]);
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

  cancel(){
    
    
  }
}
