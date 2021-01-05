import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {BailService} from '../../partages/bail.service';


@Component({
  selector: 'app-profil-form',
  templateUrl: './profil-form.component.html',
  styleUrls: ['./profil-form.component.css']
})
export class ProfilFormComponent implements OnInit {

  userDisplayName:string = "";
  listesProfils:string;

  images:string ;
 /* addImage = new FormGroup({
    photo :  new FormControl('')
  });*/

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
  //on selectionne l'image à ajoutée 
  selectImage(event){
    console.log(event);
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      return this.images = file;
    }
        
  }

  //creation du fomulaire et ajout des valeurs saisies par l'utilisateur 
  formData = new FormData();
  chargement(){
    
    this.formData.append("photo", this.images);
    this.bailService.uploadImage(this.formData).subscribe(res =>{
      console.log("winnnnn");
      return res;
    });

  }

}
