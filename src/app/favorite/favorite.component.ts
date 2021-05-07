import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs:['isFavorite'] another approach but bad practice if we change var name
})
export class FavoriteComponent implements OnInit {
  //now this field is exposed to outside
  @Input('isFavorite') isSelected:boolean;//alias name 'isFavorite'
  @Output() change= new EventEmitter();//change is event name 
  constructor() { }

  ngOnInit(): void {
  } 

  toggleFav(){
    this.isSelected=!this.isSelected;
    this.change.emit();
    // to raise or publishinh an event notifying others event triggered
  }
}
