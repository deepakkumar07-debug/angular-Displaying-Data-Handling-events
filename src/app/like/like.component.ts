import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount:number;
  @Input('isActive') isActive:boolean;


  onClick() {
    // if isActive true decrement by 1 else increment by 1
    this.likesCount+=(this.isActive) ? -1 :1;
    this.isActive=!this.isActive;
  }

  // tweet = { 
  //   body:'Here is the body of the Tweet...',
  //   isLiked:false,
  //   likesCount:0
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
