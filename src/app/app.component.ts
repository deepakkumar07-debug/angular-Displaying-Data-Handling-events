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

  onFavoriteChanged(isFavorite){
    console.log('favorite changed: ',isFavorite);
    
  }
}
