import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs:['isFavorite'] another approach but bad practice if we change var name
})
export class FavoriteComponent implements OnInit {
  //now this field is exposed to outside
  @Input() isFavorite:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleFav(){
    this.isFavorite=!this.isFavorite;
  }
}
