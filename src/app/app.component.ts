import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  list : any[];

  constructor(){
    this.list = 
      [
        {name :'India',checked : false},
        {name :'US',checked : false},
        {name :'China',checked : false},
        {name :'France',checked : false}
      ]
  }

  shareCheckedList(item:any[]){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }

}
