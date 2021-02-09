import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  goToProfil = new FormGroup({
    username : new FormControl(""),

  });



  titre:String = "$wap-It";

  imgSite:string = environment.siteUrl;
  
  classActive = 'active';
  userDisplayName:string = "";
  userDisName:string = "";
  userDisplayId;

  alert1:boolean = false;
  alert2:boolean = false;

  alredy:boolean = true;

  userFoundName;
  userFoundAge;
  userFoundGenre;
  userFoundAbout;
  userFoundChoix;
  userFoundImg;
  userFoundBack;
  userFoundNom;
  userFoundPrenom;
  userFoundfollowers;
  userFoundload;
  userFoundID;
  userFollowers;
  userFollowings;


  postId;

  aProp1:string;
  aProp2:string;
  aProp3:string;
  aProp4:string;
  aProp5:string;
  pote;
  pote1;
  pote2;

  compteur = 0;

  
  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;
  listesPoste:any;
  friend:any;


  goToUser = new FormGroup({
    nom : new FormControl(''),
  });
  likers = new FormGroup({
    idToLike : new FormControl(''),
  });


  partage = new FormGroup({
    message : new FormControl(""),
    date : new FormControl(""),
    commentaires : new FormControl(""),
    loadBy: new FormControl(""),
  });

  constructor(private bailService:BailService, private route: Router, private router : ActivatedRoute) { }

  ngOnInit(): void {

    
    this.userDisplayName = localStorage.getItem("loggedUser");
    this.userDisName = sessionStorage.getItem("loggedUser");
    
    // gestion de la recherche utilisateur pour demande d'amis 
    /*this.bailService.findFriends(this.goToUser.get("nom").value).subscribe(res =>{
      //console.log(this.goToUser.get("nom").value);
     
       console.log("!!!",res);
       this.goToUser.reset({});
       this.userFoundName = res["username"];
       this.userFoundAge = res["age"];
       this.userFoundGenre = res["genre"];
       this.userFoundAbout = res["presentation"];
       this.userFoundChoix = res["preferences"];
       this.userFoundNom = res["nom"];
       this.userFoundAmis = res["amis"];
       this.alert1 = true;
       return res;
    });*/


    // gestion du status de la demande d'amis 
    this.bailService.showProfils().subscribe((res) =>{
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
        //console.log("yaa",newR[i][1]._id);
        let tab = newR[i][1].followers;
        let tab0 = newR[i][1].followings;
        let tab1 = newR[i][1]._id;
        // on parcour les tableau followers et followings 
        /*for(let owers of tab){
          this.userFollowers = owers;
        }
        for(let owings of tab0){
          this.userFollowings = owings;
        }*/
        this.userFollowers = tab;
        this.userFollowings = tab0;
        //this.pote = tab;
        this.userFoundload = newR[i][1].username;
        console.log("yel", this.userFoundload);

        if(this.userDisplayName === this.userFoundload){
         // this.userFollowers = tab;
          //this.userFollowings = tab0;
          this.userDisplayId = tab1;
          console.log("re",this.userDisplayId);
          for(let j=0; j<tab.length;j++){
            this.compteur +=1; 
            for(let k=0; k<tab0.length; k++){
              if(tab0[k] === tab[j]){
                this.compteur -=1;
              }
            }
  
          }

        }
      }

    });
    
    this.bailService.displayPost().subscribe(res =>{
      console.log("posteee",res);
      this.listesPoste = res;
      // on transforme le l'objet en tableau key/value
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      //console.log("postiiit",newR);
      for(let i=0; i<newR.length; i++){
        let tabPost = newR[i][1]._id;
        console.log("publications",tabPost);
        this.postId = tabPost;

      };
    });
  
  }


  
  
  connexion(){
    console.log(this.goToUser.get("nom").value);
    this.bailService.findFriends(this.goToUser.get("nom").value).subscribe(res =>{
     //console.log(this.goToUser.get("nom").value);
    
      console.log("losaaaa",res);
      this.goToUser.reset({});
      this.userFoundName = res["username"];
      this.userFoundAge = res["age"];
      this.userFoundGenre = res["genre"];
      this.userFoundAbout = res["presentation"];
      this.userFoundChoix = res["preferences"];
      this.userFoundNom = res["nom"];
      this.userFoundPrenom = res["prenom"]
      this.userFoundfollowers = res["followers"];
      this.userFoundID = res["_id"];
      console.log("top",this.userFoundID);
      for(let amigo of this.userFoundfollowers){
        this.pote = amigo;
      }
      this.alert1 = true;
      return res;
    });
    
    this.bailService.displayImage().subscribe((res) =>{
      this.listeImages = res;
      console.log("ici -->",this.userFoundName);
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
          console.log("verifions",tab[j].loadBy);
          let obj = tab[j];
          if(obj.loadBy === this.userFoundName){
            this.userFoundBack = obj.photo;
            console.log("retro",this.userFoundBack);
          }
        }
      }
    });

    /*this.bailService.displayImage1().subscribe((res) =>{
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
    });*/
    
    //this.route.navigate(["/{}"]);
    
  }

  addAmis = new FormGroup({
    //sendBy : new FormControl(""),
    //acceptBy : new FormControl("")
    idToFollow: new FormControl("")
  });
  
  demande(){
    //console.log("verification ...",this.userDisplayName);
    console.log(this.userFoundID);
    
    console.log(this.addAmis.value);
    /*this.bailService.addFriend(this.goToUser.get("nom").value, this.addAmis.get("amis").value).subscribe(res =>{
      console.log(res);
      return res;
    });*/

    //console.log(this.userFoundNom);
    //console.log("falala ...",this.addAmis.get(this.addAmis.get("amis").value));
    //this.route.navigate["/nom"];
    this.bailService.addFriend(this.userDisplayId, this.addAmis.value).subscribe(res =>{
      console.log(res);
      return res;
    });


  }
  ajout(){
    console.log(this.likers.value);
    this.bailService.likesPost(this.postId, this.likers.value).subscribe(res =>{
      console.log(res);
      return res;
    });

  }

  
}
