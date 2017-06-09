import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-body',
  template:
  `<div class="feed-item-body">
      {{ summary }}
  </div>`
})

export class FeedItemBody {
  @Input()summary: any;
};
