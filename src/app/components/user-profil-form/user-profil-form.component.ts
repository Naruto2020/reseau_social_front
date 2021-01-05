import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import {BailService} from '../../partages/bail.service';

@Component({
  selector: 'app-user-profil-form',
  templateUrl: './user-profil-form.component.html',
  styleUrls: ['./user-profil-form.component.css']
})
export class UserProfilFormComponent implements OnInit {

  userDisplayName:string = "";
  listesProfils:string;

  images:string ;

  constructor(private bailService:BailService) { }

  ngOnInit(): void {
    this.bailService.showProfils().subscribe(res =>{
      this.listesProfils =res;
      let newR = Object.keys(res).map(function(cle) {
        return [Number(cle), res[cle]];
      });
      for(let i=0; i< newR.length; i++){
        let tab = newR[i];
        for(let j=0; j<tab.length;j++){
          let obj = tab[j];
          if(tab[j].username === localStorage.getItem("loggedUser")){
            
          }
        }
      }
    });
    this.userDisplayName = localStorage.getItem("loggedUser");
  }

}
