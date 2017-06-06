import { Component } from '@angular/core';

@Component({
  selector: 'feed-item-header',
  template:
  `<div class="feed-item-prof-name">
      <div class="prof-name">
        <div class="prof-wrapper">
          <div class="feed-item-name">
            Jasdev Sidhu
          </div>
          <div class="feed-item-type">
            post a message
          </div>
        </div>
      </div>
      <div class="timestamp">
        <div> 12 mins ago </div>
      </div>
    </div>`
})

export class FeedItemHeader {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
};
