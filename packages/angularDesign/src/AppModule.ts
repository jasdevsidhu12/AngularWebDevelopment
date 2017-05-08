import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './component/AppComponent';
import { MainComponent } from './component/MainComponent';
import { FeedItem } from './component/FeedItem';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, MainComponent, FeedItem],
  bootstrap: [AppComponent]
})

export class AppModule {}
