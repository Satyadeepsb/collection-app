import {Collectable} from "./collectable.model";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {OnInit ,Injectable, } from "@angular/core";

@Injectable()
export class CollectableService implements OnInit{
  private _url : string = "apidata/data.json";

  private collectables  : Collectable[] = [];

  private sss : any[] ;
  private collection: Collectable[] = [];

  constructor(private _http : Http){ }

  getCollectables(){
    console.log(this.collectables);
    return this._http.get(this._url).map((response : Response) => response.json());
  }

  ngOnInit() {
    this._http.get(this._url).map((response : Response) => response.json().subscribe(resCollectionData => this.collectables = resCollectionData));
  }


  getCollection(){
    return this.collection;
  }

  newAdd(item:Collectable){
    for (let value of this.collectables) {
      if(item.description === value.description){
        return;
      }
    }
    this.collectables.push(item);
  }

  addToCollection(item : Collectable){
    if(this.collection.indexOf(item) !== -1){
      return;
    }
    this.collection.push(item);
  }

  removeFromCollection(item : Collectable){
    this.collection.splice(this.collection.indexOf(item),1);
  }



}
