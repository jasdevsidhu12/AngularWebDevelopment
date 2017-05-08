import { Component } from '@angular/core';

@Component({
  selector: 'feed-item',
  template:
  `<div [ngClass]="{ 'item': true }">
    hello world
  </div>`
})

export class FeedItem {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
};
