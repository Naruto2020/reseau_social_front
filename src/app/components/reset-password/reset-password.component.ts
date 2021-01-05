import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  // initialisation de l'alerte validant la reinitialisation  du mot de passe 
  alert:boolean = false;
  // gestion de la validation des champs
  alert1 : boolean = false;
  alert2 : boolean = false;
  alert3 : boolean = false;

  resetPasword = new FormGroup({
    username: new FormControl(''),
    password : new FormControl(''),
    password1 : new FormControl(''),
  });

  constructor(private bailService : BailService, 
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.bailService.currentDta(this.router.snapshot.params.reset).subscribe((results)=>{
      console.log("voici le token",this.router.snapshot.params.reset);
      console.log(results);
      this.resetPasword = new FormGroup({
        //username: new FormControl(results['username']),
        password : new FormControl(''),
        password1 : new FormControl(''),
  
      });
   
    });
  }

  mettreAjour(){

    if(this.resetPasword.value.password.length < 8 ){
      this.alert2 = true;
    }

    
    
    this.bailService.initPass(this.router.snapshot.params.reset, this.resetPasword.value).subscribe((results)=>{
      
      if(this.resetPasword.value.password !== this.resetPasword.value.password1){
        this.alert1 = true;
        this.resetPasword.reset({});
      }else{
        console.log(results);
         this.alert = true;
         this.resetPasword.reset({});
         return results;

      } 


    }, (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401 || err.status === 404 || err.status === 500){
          this.alert1 = true;
          this.alert2 = true;
          this.alert3 = true;
          this.resetPasword.reset({});
        }

      }
    });
  }

  fermerAlert(){
    this.alert = false;
    this.alert1 = false;
    this.alert2 = false;
    this.alert3 = false;
  }

}
