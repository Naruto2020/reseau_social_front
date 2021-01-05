import { Component, OnInit } from '@angular/core';

import {BailService} from '../../partages/bail.service';
import { Router } from '@angular/router';

import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  titre:String = "$wap-It";
  userDisplayName:string = "";

  imgSite:string = environment.siteUrl;
  url1:string ;

  listeImagesPro:any;

  constructor(private bail:BailService, private router: Router) { }

  ngOnInit(): void {
    this.bail.displayImage1().subscribe(res =>{
      this.listeImagesPro = res;
      for(let i=0; i< Object.entries(res).length; i++){
        let tab = Object.entries(res)[i];
        for(let j=0; j<tab.length; j++){
          console.log("testyyy",typeof(tab[j]));
          if(tab[j].loadBy === localStorage.getItem("loggedUser")){
            console.log("image >>",`${this.imgSite}/${tab[j].photo}`);
            this.url1 = `${this.imgSite}/${tab[j].photo}`;
          }
          
         }
      
       }
    });
    this.userDisplayName = localStorage.getItem("loggedUser");
  }

  logout(){
    console.log(localStorage);
    this.bail.deconnecter();
    console.log(localStorage);
    this.router.navigate(["/admin"]);

  }

}
