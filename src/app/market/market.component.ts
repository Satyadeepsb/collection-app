import { Component, OnInit } from '@angular/core';
import {Collectable} from "../shared/collectable.model";
import {CollectableService} from "../shared/collectable.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
})
export class MarketComponent implements OnInit {
  collectables : Collectable[] = [];
  img : string ;

  onAddToCollection(item : Collectable){
      this.collectableService.addToCollection(item);
  }

  constructor(private collectableService : CollectableService) { }

  ngOnInit() {
    this.img ="../../apidata/1.jpg";
     this.collectableService.getCollectables()
       .subscribe(resCollectionData => this.collectables = resCollectionData);
  }

}
