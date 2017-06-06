import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'main-comp',
  template:
  `<div class="activity-stream-body">
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
    <feed-item></feed-item>
  </div>`
})

export class MainComponent {
  app = { title: 'Minimal NgModule', name: 'Jasdev'};
  color= 'blue';
};
