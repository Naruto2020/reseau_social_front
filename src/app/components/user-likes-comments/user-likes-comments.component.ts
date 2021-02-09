import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-user-likes-comments',
  templateUrl: './user-likes-comments.component.html',
  styleUrls: ['./user-likes-comments.component.css']
})
export class UserLikesCommentsComponent implements OnInit {

  userDisplayName:string = "";
  userDisName:string = "";
  userDisplayId;


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


  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;
  listesPoste:any;
  friend:any;

  postId;
  postLikers;
  postLike;


  compteur = 0;
  compteur1 = 0;


  likers = new FormGroup({
    idToLike : new FormControl(''),
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

    // gestion des poste
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
        let tabLikers = newR[i][1].likers;
        this.postLikers = newR[i][1].likers;
        for(let lik of tabLikers){
          this.postLike = lik;
          console.log("id like",this.postLikers);
          console.log("id user",this.userDisplayId);
        }
        console.log("publications",tabPost);
        this.postId = tabPost;

      };
    });
  }

  good(){
    console.log(this.likers.value);
    this.bailService.likesPost(this.postId, this.likers.value).subscribe(res =>{
      console.log(res);
      return res;
    });

  }

}
