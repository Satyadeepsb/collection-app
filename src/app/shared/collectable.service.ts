import {Collectable} from "./collectable.model";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {OnInit ,Injectable, } from "@angular/core";

@Injectable()
export class CollectableService implements OnInit{
  public _url : string = "./apidata/data.json";
  public collectables  : Collectable[] = [];
  public collection: Collectable[] = [];
  public demo : any[] = [];

  constructor(private _http : Http){}

  getCollectables(){
    console.log(this.collectables);
    // return this.collectables;
    return this._http.get(this._url).map((response : Response) => response.json());
  }



  getMainCollectable(){
    let body : any = {jsonData : {}};
    let header = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    let options = new RequestOptions({headers : header,method : 'get'});
    return this._http.get(this._url,options);
  }



  ngOnInit() {
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
    this.demo = this.collectables;
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
