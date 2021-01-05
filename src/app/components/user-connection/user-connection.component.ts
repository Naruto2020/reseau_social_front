import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {BailService} from '../../partages/bail.service';
import { from } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-connection',
  templateUrl: './user-connection.component.html',
  styleUrls: ['./user-connection.component.css']
})
export class UserConnectionComponent implements OnInit {

  goToProfil = new FormGroup({
    username : new FormControl(""),
    password : new FormControl(""),
    niveau : new FormControl("")
  });

  listesProfils:any;
  alert1 : boolean = false;
  alert2 : boolean = false;

  constructor(private bail:BailService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  connexion(){

    // alert si champs pas correctement remplit
    if(this.goToProfil.value.username === "" || this.goToProfil.value.password === "" ){
      this.alert1 = true;
  
    }

    // connexion et authentification 
    this.bail.connecter(this.goToProfil.value).subscribe((res,)=>{
      console.log(res);
      console.log(res[Object.keys(res)[Object.keys(res).length - 1]].username);
      if(this.goToProfil.get("username").value  === res.user.username && this.goToProfil.get("password").value === res.user.password && this.goToProfil.get("niveau").value === res.user.niveau  && res.isAuthenticated === true){
        // gestion du stockage des données dans la session du nav 
        //localStorage.setItem('isConnected', 'true');
        localStorage.setItem("loggedUser", res[Object.keys(res)[Object.keys(res).length - 1]].username);
        this.router.navigate(["/accueil"]);
        
      } 

    }, (err)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status === 401 || err.status === 404){
          this.alert2 = true;
          this.goToProfil.reset({});
        }
      }
    });

  }

  //envoit du mail pour reinitialisation du mot de passe 
  reinit(){
    this.bail.forgotMail(this.goToProfil.value).subscribe((result)=>{
      console.log(result);
      return result;
    });  
  
  }

  // fermeture des alerts
  fermerAlert(){
  
    this.alert1 = false;
    this.alert2 = false;
  }

}
