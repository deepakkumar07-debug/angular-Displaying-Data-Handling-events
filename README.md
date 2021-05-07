# AngularDisplayingDataHandlingEvents

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
  constructor() { }

  ngOnInit(): void {
  }

}
```

```html
<img src="{{imageUrl}}" alt="no image"/>
```
behind the scene angular compiles string interpolation into property binding 

- we bind property of dom element like src here to field or property in our component.ts

- whether we use string interpolation or square bracket syntax
- for textual value use string interpolation like head tags span div else use square bracket syntax

```html
<h2 [textContent]='title'></h2>
<h2>{{title}}</h2>
<img src="{{imageUrl}}" alt="no image"/>
<img [src]="imageUrl"/>
```
- use cleaner and shorter syntax
 **property binding only works one way. From component to dom**
 which means ts file property to html

# attribute binding

```html
<table>
    <tr>
        <!-- error NG8002: Can't bind to 'colspan' since it isn't a known property of 'td'. -->
        <td [attr.colspan]="colSpan">welcome</td>
    </tr>
</table>
```
# importing bootstrap

`npm i bootstrap`

`styles.css`
@import '~bootstrap/dist/css/bootstrap.min.css';

# class binding
```html
<button class="btn btn-danger" [class.active]='isActive'>Active Danger</button>
```
```ts
  isActive=true;
```
# style binding
variation of class binding very similar to class binding
**Dom Style Objects**

# Event binding
```html
<button (click)="onSave($event)" class="btn btn-secondary">Event trigger</button>
```

```ts
  onSave($event){
    console.log("clicked",$event);
    
  }
```
# Event Bubbling
    <element>
        <element>
            <element>
inside to outside (event bubbles up dom tree)
to prevent second handler or second event 
we use 
    $event.stopPropagation();

# Event filtering
```html
type :<input type="text" (keyup.enter)="onKeyUp()"/>
```

# template variables
```html
email :<input type="text" #email (keyup.enter)="onKeyUp(email.value)"/>
```
```js
onKeyUp(email){
    console.log(email)
}
```
# two way binding

A component encapsulates data a logic and the html markup behind the view


```js
@Component({
  selector: 'image',
  template: `
        one way binding
        <input [value]="email" (keyup.enter)="onEmailChange()"/> 
  `,//html template
  styleUrls: ['./image.component.css']
})
export class ImageComponent{
 email;//field used to encapsulate data

//behaviour of logic behind the view
 onEmailChange(){
    console.log(this.email);
  }
}
```
## method 1 two way binding
Email field<input [value]="email" (keyup.enter)="email=$event.target.value; onEmailChange()"/> 

## method 2 
ngmodel to implement 2 way binding another builtin directive
banana in the box syntax

import form module to use ngModel
<input [(ngModel)]="email" (keyup.enter)="onEmailChange()"/> 

# Pipes
pipes to format data
 - Uppercase
 - Lowercase
 - Decimal
 - Currency
 - Percent

 to apply pipes use pipe operator | followed by name of the pipe
 ```js
  course ={
    title:'Data Bindings in Angular',
    rating:4.9745,
    students:30123,
    price:190.95,
    releaseDate: new Date(2020,3,1)
  }
```


```html
 <table class="table table-striped">
    <thead>
        <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Students</th>
            <th>Price</th>
            <th>Release Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{{course.title | uppercase | lowercase}}</td>
            <!-- 1.2-2 (1 digit after dot 2 min 2 max) -->
            <!-- if we use 2.1-1 we have leading zero -->
            <td>{{course.rating | number: '1.2-2'}}</td>
            <!-- make decimal point to separate every 3 digit using comma -->
            <!-- called decimal pipe but keyword is number -->
            <td>{{course.students | number}}</td>
            <!-- currency format default usd  -->
            <td>{{course.price | currency:'INR' : true :'3.2-2'}}</td>
            <td>{{course.releaseDate | date:'dd/MM/y'}}</td>
        </tr>
    </tbody>
</table>
```
 https://angular.io/api/common/DatePipe


 # custom pipe
 create a new files named summary.pipe.ts in app level
https://angular.io/api/core/PipeTransform
our custom class must have exact signature of the transform method
 ```ts
import { Pipe,PipeTransform } from "@angular/core";
// Pipe decorator function
// PipeTransform interface it defines the shape of our pipes

@Pipe({
    name:'summary'
})

export class SummaryPipe implements PipeTransform {
    // transform(value: any, args?: any) { optional ?

    // transform(value: any, ...args: any[]) {
    transform(value: string, limit?: number) {
        if(! value) return null;//empty str undefined
        // throw new Error("Method not implemented.");
        
        let actualLimit=(limit) ? limit :50;
        return value.substr(0,actualLimit)+'...';
    }

}
 ```

```html
<br>
some text: {{text}}
<br><br>
some text with summmary: {{text | summary}}
<br><br>
<br><br>
some text with summmary limit: {{text | summary :10}}
<br><br>
```
ERROR Error: The pipe 'summary' could not be found!

we need to register in app module imports section
 # title case
generate pipe

 ng g p title-case

 # Building reusable components

 custom component needs input properties(state) and output properties to raise event from our custom component this called component api(public api)

 example
            <!-- input -->                    <!-- output -->
 <favourite [isFavourite]="post.isFavourite" (change)="onFavChange">

# two apprpoach to mark fields as input property

approach 1
importiung Input
@Input() decorator
- Its a built in decorator marking fileds and properties as input properties

```ts
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
```

if we are building reusable component give an input properties an alias(nickname) to keep contract of our component stable

```ts
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // inputs:['isFavorite'] another approach but bad practice if we change var name
})
export class FavoriteComponent implements OnInit {
  //now this field is exposed to outside
  @Input('isFavorite') isSelected:boolean;//alias name 'isFavorite'
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleFav(){
    this.isSelected=!this.isSelected;
  }
}
```

# output property
```ts
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
```
`app.component.ts`
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Displaying-Data-Handling-events';

  post ={
    title:"Title",
    isFavorite:true
  }

  onFavoriteChanged(){
    console.log('favorite changed');
    
  }
}
```

# Passing event data