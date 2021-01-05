import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import {BailService} from '../../partages/bail.service';

@Component({
  selector: 'app-user-set',
  templateUrl: './user-set.component.html',
  styleUrls: ['./user-set.component.css']
})
export class UserSetComponent implements OnInit {

  userDisplayName:string = "";

  listeImages:any;
  listeImagesPro:any;
  listesProfils:any;

  constructor(private bailService:BailService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.bailService.displayImage().subscribe(res =>{
      this.listeImages = res;
    });

    this.bailService.displayImage1().subscribe(res =>{
      this.listeImagesPro = res;
    });
    this.userDisplayName = localStorage.getItem("loggedUser");
  }

  cancelImgBack(){
    console.log(this.router.snapshot.params._id);
    this.bailService.deleteImgBack(this.router.snapshot.params._id).subscribe(res =>{
      this.bailService.displayImage().subscribe(res =>{
        this.listeImages = res;
      });
      return res;
    });
  }

}
