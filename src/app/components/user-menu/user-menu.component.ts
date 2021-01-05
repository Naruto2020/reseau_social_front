import { Component, OnInit } from '@angular/core';

import {BailService} from '../../partages/bail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  titre:String = "$wap-It";
  userDisplayName:string = "";
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
            console.log("image >>",`https://127.0.0.1:3000/${tab[j].photo}`);
            this.url1 = `https://127.0.0.1:3000/${tab[j].photo}`;
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
    this.router.navigate(["/"]);

  }

}
