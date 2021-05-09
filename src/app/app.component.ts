import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Displaying-Data-Handling-events';

  tweet = { 
    body:'Here is the body of the Tweet...',
    likesCount:10,
    isLiked:true
  }

  post ={
    title:"Title",
    isFavorite:true
  }

  onFavoriteChanged(isFavorite){
    console.log('favorite changed: ',isFavorite);
    
  }
}
