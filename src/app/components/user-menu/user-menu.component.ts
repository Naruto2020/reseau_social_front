import { Component, OnInit } from '@angular/core';

import {BailService} from '../../partages/bail.service';
import { Router } from '@angular/router';

import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  titre:String = "$wap-It";

  imgSite:string = environment.siteUrl;
  userDisplayName:string = "";
  url1:string ;

  userFoundload;
  compteur = 0;

  listesProfils;
  listeImagesPro:any;

  constructor(private bail:BailService, private router: Router) { }

  ngOnInit(): void {

    this.userDisplayName = localStorage.getItem("loggedUser");
    //this.userDisName = sessionStorage.getItem("loggedUser");

        // gestion du status de la demande d'amis 
        this.bail.showProfils().subscribe((res) =>{
          console.log(">>>",res);
          this.listesProfils = res;
          // on transforme l 'obet res en tableau cle/valeur representant chaques Ut de la BDD 
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
            this.userFoundload = newR[i][1].username;
            if(this.userDisplayName === this.userFoundload){
              for(let j=0; j<tab.length;j++){
                this.compteur +=1;
                for(let k=0; k<tab1.length; k++){
                  if(tab1[k] === tab[j]){
                    this.compteur -=1;
                  }
                } 
      
              }
    
            }
          }
    
        });

    this.bail.displayImage().subscribe(res =>{
      this.listeImagesPro = res;
      for(let i=0; i< Object.entries(res).length; i++){
        let tab = Object.entries(res)[i];
        for(let j=0; j<tab.length; j++){
          console.log("testyyy",typeof(tab[j]));
          if(tab[j].loadBy === localStorage.getItem("loggedUser")){
            console.log("image >>",`${this.imgSite}/${tab[j].photo}`);
            this.url1 = `${this.imgSite}/${tab[j].photo}`;
          }
          
         }
      
       }
    });
    this.userDisplayName = localStorage.getItem("loggedUser");
  }

  logout(){
    console.log(localStorage);
    this.bail.deconnecter();
    console.log(localStorage);
    this.router.navigate(["/"]);

  }

}
