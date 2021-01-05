import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';


import {BailService} from '../../partages/bail.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

      // initialisation de l'alerte validant la creation du profil
      alert:boolean = false;
      // variable qui va stocker le fichier image 
       images:string ;
       // gestion de la validation des champs 
       soumissionFich: boolean = false;
       soumissionNomPrePseu : boolean = false;
       soumissionMdpGenMail : boolean = false;
       soumissionAgePrefNiv : boolean = false;
  
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

  constructor(private bailService : BailService, 
    private router: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.router.snapshot.params._id);
    // recuperation de la reponse suite a la requête donneeCourante du composant service
    this.bailService.currentData(this.router.snapshot.params._id).subscribe((results)=>{

      console.log(" --->", results);

  
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
          //console.log(results["photo"]);
    });
  }

  mettreAjour(){

    this.bailService.updateProfil(this.router.snapshot.params._id, this.editProfil.value).subscribe((results)=>{
      if(this.editProfil.value.nom === "" || this.editProfil.value.nom.length < 2){
        this.soumissionNomPrePseu = true;

      }else if(this.editProfil.value.prenom === "" || this.editProfil.value.prenom.length < 2){
        this.soumissionNomPrePseu = true;

      }else  if( this.editProfil.value.username === "" || this.editProfil.value.username.length < 2){
        this.soumissionNomPrePseu = true;
      }else if( this.editProfil.value.password === "" || this.editProfil.value.password.length < 8){
        this.soumissionMdpGenMail = true;

      }else if( this.editProfil.value.mail === "" ){
        this.soumissionMdpGenMail = true;

      }else if(this.editProfil.value.niveau === ""){
        this.soumissionAgePrefNiv = true;
        
      }else{
        this.alert = true;
      }
      
      this.editProfil = new FormGroup({
        //photo :  new FormControl(results['photo']),
        nom : new FormControl(results['name']),
        prenom : new FormControl(results['status']),
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
      console.log(this.editProfil);
    });

  }

  fermerAlert(){
    this.alert = false;
    this.soumissionFich = false;
    this.soumissionNomPrePseu = false;
    this.soumissionMdpGenMail = false;
    this.soumissionAgePrefNiv = false;

  }

}
