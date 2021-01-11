import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

//const imgSite = environment.siteUrl;

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  titre:String = "$wap-It";

  //address0 = "https://swapengin.herokuapp.com"
  imgSite:string = environment.siteUrl;
  
  classActive = 'active';
  userDisplayName:string = "";
  userDisName:string = "";

  alert1:boolean = false;

  userFoundName;
  userFoundAge;
  userFoundGenre;
  userFoundAbout;
  userFoundChoix;
  userFoundImg;
  userFoundBack;
  userFoundNom;


  aProp1:string;
  aProp2:string;
  aProp3:string;
  aProp4:string;
  aProp5:string;
  pote;
  pote1;
  pote2;

  
  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;


  goToUser = new FormGroup({
    nom : new FormControl(''),
  });

  constructor(private bailService:BailService, private route: Router, private router : ActivatedRoute) {
    !bailService;
   }
  

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem("loggedUser");
    this.userDisName = sessionStorage.getItem("loggedUser");
    /*this.bailService.showProfils().subscribe(res =>{
      //this.listesProfils = res;
      //console.log(res);
     
    });*/

    this.bailService.findFriends(this.goToUser.get("nom").value).subscribe(res =>{
      //console.log(this.goToUser.get("nom").value);
     
       console.log("losa",res["preferences"]);
       this.goToUser.reset({});
       this.userFoundName = res["username"];
       this.userFoundAge = res["age"];
       this.userFoundGenre = res["genre"];
       this.userFoundAbout = res["presentation"];
       this.userFoundChoix = res["preferences"];
       this.userFoundNom = res["nom"];
       this.alert1 = true;
       return res;
     });


    // gestion du status de la demande d'amis 
    this.bailService.showProfils().subscribe((res) =>{
      //console.log(">>>",res);
      this.listesProfils = res;
      // on transforme l 'obet res en tableau cle/valeur representant chaques Ut de la BDD 
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      //console.log("new ...",newR);
      //console.log(Object.entries(res));
      // on boucle sur le nouveau tableau pour recupérer chaque UT 
      for(let i=0; i< newR.length; i++){
        console.log("yooo",newR[i]);
        let tab = newR[i];
        for(let j=0; j<tab.length;j++){
          console.log("isola",tab[j].username);
          this.pote = tab[j];
          //this.pote1 = tab[j].username;
          //let objId = tab[j]._id;
          if(this.pote.username === localStorage.getItem("loggedUser")){
            this.aProp1 = this.pote.genre;
            this.aProp2 = this.pote.age;
            this.aProp3 = this.pote.preferences;
            this.aProp4 = this.pote.presentation;
            this.aProp5 = this.pote.amis;
           
            for(let k=0; k < this.aProp5.length; k++){
              //this.pote2 = this.aProp5[k];
              //console.log("qps",this.pote2.length);
              console.log("mercoooooooooooon");
              
            }
          }

        }
      }  

    });
  }

  connexion(){
    
    //console.log(this.goToUser.get("nom").value);
    this.bailService.findFriends(this.goToUser.get("nom").value).subscribe(res =>{
      console.log("loo");
      //console.log(this.goToUser.get("nom").value);
     /* this.goToUser = new FormGroup({
        nom : new FormControl(res["nom"])
      });*/
      //console.log("losa",res["preferences"]);
      this.goToUser.reset({});
      this.userFoundName = res["username"];
      this.userFoundAge = res["age"];
      this.userFoundGenre = res["genre"];
      this.userFoundAbout = res["presentation"];
      this.userFoundChoix = res["preferences"];
      this.userFoundNom = res["nom"]
      this.alert1 = true;
      return res;

      
    });
    
    this.bailService.displayImage().subscribe((res) =>{
      this.listeImages = res;
      console.log(this.userFoundName);
      //this.listesProfils = res;
      // on transforme le l'objet en tableau key/value
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      console.log("new ...",newR);
      for(let i=0; i<newR.length; i++){
        let tab = newR[i];
        //console.log(tab);
        for(let j=0; j<tab.length; j++){
          console.log(tab[j].loadBy);
          let obj = tab[j];
          if(obj.loadBy === this.userFoundName){
            this.userFoundBack = obj.photo;
          }
        }
      }
    });

    this.bailService.displayImage1().subscribe((res) =>{
      this.listeImagesPro = res;
      console.log(this.userFoundName);
      //this.listesProfils = res;
      // on transforme le l'objet en tableau key/value
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      console.log("new ...",newR);
      for(let i=0; i<newR.length; i++){
        let tab = newR[i];
        //console.log(tab);
        for(let j=0; j<tab.length; j++){
          console.log(tab[j].loadBy);
          let obj = tab[j];
          if(obj.loadBy === this.userFoundName){
            this.userFoundImg = obj.photo;
          }
        }
      }
    });
    
    
  }

  addAmis = new FormGroup({
    //sendBy : new FormControl(""),
    //acceptBy : new FormControl("")
    amis: new FormControl("")
  });


  demande(){
    //console.log("verification ...",this.userDisplayName);
    console.log(this.userFoundNom);
    
    console.log(this.addAmis.value);
    /*this.bailService.addFriend(this.goToUser.get("nom").value, this.addAmis.get("amis").value).subscribe(res =>{
      console.log(res);
      return res;
    });*/

    //console.log(this.userFoundNom);
    //console.log("falala ...",this.addAmis.get(this.addAmis.get("amis").value));
    //this.route.navigate["/nom"];
    this.bailService.addFriend(this.userFoundNom, this.addAmis.value).subscribe(res =>{
      console.log(res);
      return res;
    });

    /*this.bailService.ajoutAmis(this.addAmis.value).subscribe(res =>{
      console.log(res);
    });*/

  }

}
