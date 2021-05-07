import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { TitleCasePipe } from './title-case.pipe';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TitleCasePipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
