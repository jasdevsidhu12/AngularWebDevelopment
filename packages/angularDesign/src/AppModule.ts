import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './trend_design/component/AppComponent';
import { MainComponent } from './trend_design/component/MainComponent';
import { FeedItem } from './trend_design/component/FeedItem';
import { FeedItemHeader } from './trend_design/component/FeedItemHeader';
import { FeedItemBody } from './trend_design/component/FeedItemBody';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, MainComponent, FeedItem, FeedItemHeader, FeedItemBody],
  bootstrap: [AppComponent]
})

export class AppModule {}
