import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-user-display-friend-profil',
  templateUrl: './user-display-friend-profil.component.html',
  styleUrls: ['./user-display-friend-profil.component.css']
})
export class UserDisplayFriendProfilComponent implements OnInit {

  titre:String = "$wap-It";
  imgSite:string = environment.siteUrl;
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
  aProp5:string;
  majTof:string;

  userFoundload;
  userFoundName;
  userFoundFol;
  userFoundId;
  userpostes;

  friendName;
  friendGenre;
  friendAge;
  friendPreferences;
  friendPresentation;
  friendFollowers;
  friendFollowings;
 

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;
  listesPoste:any;

  userDisplayName:string = "";
  compteur = 0;

  addImage = new FormGroup({
    _id : new FormControl(""),
    photo : new FormControl(""),
    loadBy : new FormControl("")
  });
  addImagePro = new FormGroup({
    _id : new FormControl(""),
    photo : new FormControl(""),
    loadBy : new FormControl("")
  });

  // objet pour stocker les données saisies dans le formulaire
  editProfil = new FormGroup({
    //_id : new FormControl(''),
    //photo :  new FormControl(''),
    nom : new FormControl(''),
    prenom : new FormControl(''),
    username: new FormControl(''),
    password : new FormControl(''),
    genre : new FormControl(''),
    mail : new FormControl(''),
    age : new FormControl(''),
    coordonnees : new FormControl(''),
    presentation : new FormControl(''),
    preferences : new FormControl(''),
    niveau : new FormControl(''),
         
  });

  constructor(private bailService:BailService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    
    this.bailService.displayImage1().subscribe((res)=>{
      this.listeImagesPro = res;
      //this.url1 = "";
      //console.log("ici c est img profil -->",  res[Object.keys(res)[Object.keys(res).length - 1]].photo);
      //console.log("tableau...",Object.entries(res));
      for(let i=0; i< Object.entries(res).length; i++){
        let tab = Object.entries(res)[i];
        //console.log("qtf",tab);
        for(let j=0; j<tab.length; j++){
          //console.log("testyyy",(tab[j]));
          if(tab[j].loadBy === localStorage.getItem("loggedUser")){
            //console.log("image >>",`${this.imgSite}/${tab[j].photo}`);
            this.url1 = `${this.imgSite}/${tab[j].photo}`;
          }
          
         }
      
       }
      //this.url1 = `http://127.0.0.1:3000/${res[Object.keys(res)[Object.keys(res).length - 1]].photo}`;
    });
     // gestion des notif  
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
        this.userFoundId = newR[i][1]._id;
        this.userFoundload = newR[i][1].username;
        if(this.userDisplayName === this.userFoundload){
          this.userFoundName = tabA;
          this.userFoundFol = tab1;
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

    this.bailService.displayPost().subscribe(res =>{
      //console.log("posteee",res);
      this.listesPoste = res;
   
    });

    this.bailService.currentData(this.router.snapshot.params._id).subscribe((results)=>{
      this.editProfil = new FormGroup({
        // photo :  new FormControl(results["photo"]),
          nom : new FormControl(results["nom"]),
          prenom : new FormControl(results["prenom"]),
          username: new FormControl(results['username']),
          password : new FormControl(results['password']),
          genre : new FormControl(results['genre']),
          mail : new FormControl(results['mail']),
          age : new FormControl(results['age']),
          coordonnees : new FormControl(results['coordonnees']),
          presentation : new FormControl(results['presentation']),
          preferences : new FormControl(results['preferences']),
          niveau : new FormControl(results['niveau']),
      });
      this.friendName = results['username'];
      this.friendAge = results['age'];
      this.friendGenre = results['genre'];
      this.friendPreferences = results['preferences'];
      this.friendPresentation = results['presentation'];
      this.friendFollowers = results['followers'];
      this.friendFollowings = results['followings'];

    });


    this.bailService.displayImage().subscribe((res)=>{
      //console.log(res)
       this.listeImages = res;
       //this.url = "";
       //console.log("ici c est img Back -->",  res[Object.keys(res)[Object.keys(res).length - 2]]);
       //console.log(Object.entries(res));
       for(let i=0; i< Object.entries(res).length; i++){
        //console.log("haaa",Object.entries(res)[i]);
         let tab = Object.entries(res)[i];
         for(let j=0; j<tab.length; j++){
           //console.log("poll",tab[j]);
           if(tab[j].loadBy === this.friendName){
             //console.log("imagero >>",`${this.imgSite}/${tab[j].photo}`);
             this.url = `${this.imgSite}/${tab[j].photo}`;
            }
           
          }
       
        }
       {
         //this.url = `http://127.0.0.1:3000/${res[Object.keys(res)[Object.keys(res).length - 1]].photo}`;

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
        //console.log(event);
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
            //console.log(res["photo"]);
            this.alert = false;
            this.url =`${this.imgSite}/${res["photo"]}`;
            //console.log("chargement ...",this.url);
            return res;
    
          });
    
          
        }
    
        formData1 = new FormData();
        chargement1(){
          this.formData1.append("photo",this.images);
          this.formData1.append("loadBy", localStorage.getItem("loggedUser"));
          this.bailService.uploadImage(this.formData1).subscribe(res =>{
            //console.log("Profil",res["photo"]);
            this.alert1 = false;
            this.url1 = `${this.imgSite}/${res["photo"]}`;
            //console.log(this.url1);
            return res;
          });
        }
    
        supprime(){
          //console.log("supprime");
          this.bailService.deletePost(this.router.snapshot.params._id).subscribe(res =>{
            this.bailService.displayPost().subscribe(res =>{
              this.listesPoste = res;
           
            });
            console.log(res);
            return res;
  
          });
  
        }
  
        fermerAlert(){
          this.alert = false;
          this.alert1 = false;
        }

}
