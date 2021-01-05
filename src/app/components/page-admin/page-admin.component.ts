import { Component, OnInit } from '@angular/core';
import {BailService} from '../../partages/bail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {
  alert:boolean = true;

  constructor(private bail:BailService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    console.log(localStorage);
    this.bail.deconnecter();
    console.log("pseudo :",localStorage);
    this.router.navigate(["/admin"]);

  }
  fermerAlert(){
    this.alert = false;
  }

}
