import { Component } from '@angular/core';

@Component({
  selector: 'feed-item-body',
  template:
  `<div class="feed-item-body">
      Good, better, best. Never let it rest. 'Til your good is better and your better is best.
  </div>`
})

export class FeedItemBody {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
};
