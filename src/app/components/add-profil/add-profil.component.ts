import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';

import {Profil} from '../../partages/compte';
import {BailService} from '../../partages/bail.service';


/** gestion des erreur lors de la soumission du formulaire */

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
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
  addProfil = new FormGroup({
    _id : new FormControl(''),
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
    reset: new FormControl(''),

  });
  
    
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  
  
  constructor(private bailService:BailService,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  
  //on selectionne l'image à ajoutée 
  selectImage(event){
    console.log(event);
    if(event.target.files.length > 0){
       const file = event.target.files[0];
      return this.images = file;
    }
    
  }
  
   //creation du fomulaire et ajout des valeurs saisies par l'utilisateur 
   //formData = new FormData();
  soumettre(){  
    //this.formData.append("photo", this.images);
   /* this.formData.append("nom", this.addProfil.get('nom').value);
    this.formData.append("prenom", this.addProfil.get('prenom').value);
    this.formData.append("pseudo", this.addProfil.get('pseudo').value);
    this.formData.append("mail", this.addProfil.get('mail').value);
    this.formData.append("mdp", this.addProfil.get('mdp').value);
    this.formData.append("age", this.addProfil.get('age').value);
    this.formData.append("coordonnees", this.addProfil.get('coordonnees').value);
    this.formData.append("genre", this.addProfil.get('genre').value);
    this.formData.append("preferences", this.addProfil.get('preferences').value);
    this.formData.append("niveau", this.addProfil.get('niveau').value);
    this.formData.append("presentation", this.addProfil.get('presentation').value);*/
    //console.log(this.formData);

    // gestion de la validation des champs
    /*if(!this.images){
       this.soumissionFich = true;
    }*/
    if(this.addProfil.value.nom === "" || this.addProfil.value.nom.length < 2){
      this.soumissionNomPrePseu = true;
    }
    if(this.addProfil.value.prenom === "" || this.addProfil.value.prenom.length < 2){
      this.soumissionNomPrePseu = true;
    }
    if( this.addProfil.value.username === "" || this.addProfil.value.username.length < 2){
      this.soumissionNomPrePseu = true;
    }
    if( this.addProfil.value.password === "" || this.addProfil.value.password.length < 8){
      this.soumissionMdpGenMail = true;
    }

    if( this.addProfil.value.mail === "" ){
      this.soumissionMdpGenMail = true;
    }
    if(this.addProfil.value.niveau === ""){
      this.soumissionAgePrefNiv = true;
    }

    //recupération de l'observable et souscription au services pour afficher la liste
    this.bailService.createProfil(this.addProfil.value).subscribe((res)=>{
      
      // on affiche la l'alerte si tout est ok 
      this.alert = true;
      this.addProfil.reset({});
      console.log(res);
      return res;
    });
    this.bailService.sendMail(this.addProfil.value).subscribe((res)=>{
      console.log(this.addProfil.get("mail").value);
      console.log(`Bravos! ${this.addProfil.get("username").value} bien enregistrer et le mail envoyé ...`);
      return res;
    }, err =>{
      console.log("voici --->", err);
    });
    
  }
  
 /* soumettre(){
      this.bailService.createProfil(this.addProfil.value).subscribe((res)=>{
        this.alert = true;
        // mise a zero des champs de saisie
        this.addProfil.reset({});
        console.log("recup service", res);
        return res;
      });
  }*/

  // creation du profil a la soumission du formulaire
  /*creerProfil(){
    //this.isLoadingResults = true;
    console.log(this.isLoadingResults)
    this.bailService.createProfils(this.addProfil.value).subscribe((res:any)=>{
      this.alert = true;
      this.addProfil.reset({});
      //this.isLoadingResults = false;
      return res;
    });
  }*/
  


  fermerAlert(){
    this.alert = false;
    this.soumissionFich = false;
    this.soumissionNomPrePseu = false;
    this.soumissionMdpGenMail = false;
    this.soumissionAgePrefNiv = false;
  }

}
