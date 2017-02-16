import { Component, OnInit } from '@angular/core';
import {Collectable} from "../shared/collectable.model";
import {CollectableService} from "../shared/collectable.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {

  collectionObject : Collectable ;

  constructor(private collectableService : CollectableService,private router : Router) {
    this.collectionObject  = new Collectable('','');
    if(this.collectableService.qq){
      this.collectionObject= this.collectableService.qq;
    }

  }

  addToCollection(newCollection : Collectable){
    console.log(newCollection);
    this.collectableService.newAdd(newCollection);
    //this.router.navigate(['/market']);
  }

  ngOnInit() {

  }

}
