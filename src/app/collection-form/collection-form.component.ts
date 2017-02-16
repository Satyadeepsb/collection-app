import { Component, OnInit } from '@angular/core';
import {Collectable} from "../shared/collectable.model";
import {CollectableService} from "../shared/collectable.service";

@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {

  collectionObject : Collectable ;

  constructor(private collectableService : CollectableService) { }

  addToCollection(newCollection : Collectable){
    console.log(newCollection);
    this.collectableService.newAdd(newCollection);
  }

  ngOnInit() {
    this.collectionObject  = new Collectable('','');
  }

}
