import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  title:string;
  text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id, neque odio expedita natus non ipsam. Vitae doloribus voluptatum iure blanditiis ad assumenda quae! Ratione maiores modi itaque aliquid quibusdam.'
  course ={
    title:'Data Bindings in Angular',
    rating:4.9745,
    students:30123,
    price:190.95,
    releaseDate: new Date(2020,3,1)
  }
  imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
  count=0;
  colSpan=2;
  isActive=true;
  email='';//one way binding componnt to view

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
  onEmailChange(){
    console.log(this.email);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
