import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import {BailService} from '../../partages/bail.service';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-update-publications',
  templateUrl: './update-publications.component.html',
  styleUrls: ['./update-publications.component.css']
})
export class UpdatePublicationsComponent implements OnInit {

  imgSite:string = environment.siteUrl;
  userDisplayName:string = "";

  images:string ;

  constructor(private bailService:BailService, private route: Router, private router : ActivatedRoute) { }

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

  ngOnInit(): void {
    this.userDisplayName = localStorage.getItem("loggedUser");
    this.bailService.curentPost(this.router.snapshot.params._id).subscribe(res =>{
      this.partage = new FormGroup({
        message : new FormControl(res["message"]),
        body : new FormControl(res["body"]),
        date : new FormControl(res["date"]),
        loadBy: new FormControl(res["loadBy"]),
      });

    });
  }

  selectImage(event){
    console.log(event);
    if(event.target.files.length > 0){
        const file = event.target.files[0];
      return this.images = file;
    }
      
  }

}
