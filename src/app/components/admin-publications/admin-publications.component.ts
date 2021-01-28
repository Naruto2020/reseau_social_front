import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-admin-publications',
  templateUrl: './admin-publications.component.html',
  styleUrls: ['./admin-publications.component.css']
})
export class AdminPublicationsComponent implements OnInit {
  imgSite:string = environment.siteUrl;
  userDisplayName:string = "";

  images:string ;
  url1:string;

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;
  friend:any;

  partage = new FormGroup({
    message : new FormControl(""),
    body : new FormControl(""),
    date : new FormControl(""),
    loadBy: new FormControl(""),
  });

  addImagePro = new FormGroup({
    _id : new FormControl(""),
    photo : new FormControl(""),
    loadBy : new FormControl("")
  });

  constructor(private bailService:BailService, private route: Router, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem("loggedUser");
  }

  poster(){
    this.bailService.publierMess(this.partage.value).subscribe(res =>{
      console.log(res)
      this.partage.reset({});
      return res;
    });
  }

  selectImage(event){
    console.log(event);
    if(event.target.files.length > 0){
        const file = event.target.files[0];
      return this.images = file;
    }
      
  }

  
  formData1 = new FormData();
  chargement1(){
    this.formData1.append("photo",this.images);
    this.formData1.append("loadBy", localStorage.getItem("loggedUser"));
    this.bailService.uploadImage1(this.formData1).subscribe(res =>{
      console.log("Profil",res["photo"]);
      //this.alert1 = false;
      this.url1 = `${this.imgSite}/${res["photo"]}`;
      console.log(this.url1);
      return res;
    });
  }

}
