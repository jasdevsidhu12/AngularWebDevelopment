import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-header',
  template:
  `<div class="feed-item-prof-name">
      <div class="prof-name">
        <div class="prof-wrapper">
          <div class="feed-item-name">
            {{ name }}
          </div>
          <div class="feed-item-type" [innerHTML]="typeOfPost">
          </div>
        </div>
      </div>
      <div class="timestamp">
        <div> {{ timeStamp }} </div>
      </div>
    </div>`
})

export class FeedItemHeader {
  @Input()name: string;
  @Input()typeOfPost: string;
  @Input()timeStamp: string;
};
