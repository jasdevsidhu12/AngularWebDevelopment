import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-body',
  template:
  `
  <div class="feed-item-body">
    <section *ngIf="object.attachments" class="feed-item-body-header">
      <feed-item-body-media [attachments]="object.attachments">
      </feed-item-body-media>
    </section>
    <div class="feed-item-body-content">
      <div [innerHTML]="object.summary"></div>
    </div>
  </div>
  `
})

export class FeedItemBody {
  @Input()object : any;
};
