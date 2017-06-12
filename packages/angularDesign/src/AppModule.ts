import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './trend_design/component/AppComponent';
import { MainComponent } from './trend_design/component/MainComponent';
import { FeedService} from './trend_design/service/FeedService';
import { FeedItem } from './trend_design/component/FeedItem';
import { FeedItemHeader } from './trend_design/component/FeedItemHeader';
import { FeedItemBody } from './trend_design/component/FeedItemBody';
import { FeedItemBodyMedia } from './trend_design/component/FeedItemBodyMedia';
import { FeedItemTail } from './trend_design/component/FeedItemTail';
import { FeedItemTailComment } from './trend_design/component/FeedItemTailComment';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, NgbModule.forRoot()],
  declarations: [AppComponent, MainComponent, FeedItem, FeedItemHeader, FeedItemBody, FeedItemBodyMedia, FeedItemTail,
  FeedItemTailComment],
  providers: [FeedService],
  bootstrap: [AppComponent]
})

export class AppModule {}
