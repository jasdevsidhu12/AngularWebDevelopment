import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-body',
  template:
  `
  <div class="feed-item-body">
    <section *ngIf="FeedObject.attachments" class="feed-item-body-header">
      <feed-item-body-media [attachments]="FeedObject.attachments">
      </feed-item-body-media>
    </section>
    <div class="feed-item-body-content">
      <div [innerHTML]="FeedObject.summary"></div>
    </div>
  </div>
  `
})

export class FeedItemBody {
  @Input()FeedObject : any;
};
