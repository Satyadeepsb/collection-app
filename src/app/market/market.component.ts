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

  constructor(private collectableService : CollectableService) {


    this.collectableService.getMainCollectable().subscribe(
      response=> {
        let res =response.json();
        this.collectableService.collectables= res;
        if(this.collectableService.demo.length <= 0){
          this.collectables = this.collectableService.collectables;
        }else {
          this.collectables = this.collectableService.demo;
          this.collectableService.collectables =this.collectableService.demo
        }
      },
      error=> {
        console.log('error');
      },
      ()=> {
        console.log('sdfsfsd');
        console.log(this.collectables);
      }
    );


   /* this.collectableService.getSub();

    let aaa :any =this.collectableService.responseData;
    console.log('aaaaa');
    console.log(aaa);*/

    /*this.collectableService.getCollectables()
      .subscribe(resCollectionData => this.collectableService.collectables = resCollectionData);
    console.log('Market');
    console.log(this.collectableService.collectables);
    this.collectables = this.collectableService.collectables;
    console.log(this.collectables);*/
  }

  ngOnInit() {
    this.img ="../../apidata/1.jpg";
  //  this.collectables = this.collectableService.getCollectables();


  }

}
