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