import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Profil } from 'src/app/partages/compte';
import { fileURLToPath } from 'url';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {BailService} from '../../partages/bail.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {
  listesProfils:any;
  
  alert: boolean = false;

  constructor(private bailService:BailService, private router:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this.bailService.showProfils().subscribe((results)=>{
      this.listesProfils = results;
    });
  
  }
  cancelProfil() {
    this.bailService.effaceProfil(this.router.snapshot.params._id).subscribe((results)=>{
      this.bailService.showProfils().subscribe((results)=>{
        this.listesProfils = results;
      });
      this.alert = true;
      console.log(results);
      return results;
    });
  }
  fermerAlert() {
    this.alert = false;
  }


}
