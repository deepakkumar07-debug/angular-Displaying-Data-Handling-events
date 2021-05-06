import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
  count=0;
  colSpan=2;
  isActive=true;

  increment (){
    return this.count++;
  }

  onSave($event){
    console.log("clicked",$event);
    
  }
  onDivClicked($event){
    //to prevent second handler or second event 
    $event.stopPropagation();
    console.log("div clicked",$event);
  }

  onKeyUp($event){
    console.log('onkeyup clicked',$event.target.value);
    $event.target.value='';
    
  }
  onEmailChange(email){
    console.log(email);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
