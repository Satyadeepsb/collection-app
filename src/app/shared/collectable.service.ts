import {Collectable} from "./collectable.model";
/**
 * Created by SARAL TECH on 2/16/2017.
 */

export class CollectableService{

  private collectables  : Collectable[] = [
    {description : 'A very rare copy of JQuery Book' , type : 'Book'},
    {description : 'The first letter ever' , type : 'Piece of Paper'},
    {description : 'A photo showing nothing' , type : 'Photo'},
    {description : 'a box with solid zune' , type : 'Garbage'},
  ];

  private collection: Collectable[] = [];

  getCollectables(){
    return this.collectables;
  }

  getCollection(){
    return this.collection;
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
