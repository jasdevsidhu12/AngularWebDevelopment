import { Component, ViewEncapsulation } from '@angular/core';
import { FeedComponent, FeedService} from '../service/FeedService';

@Component({
  selector: 'main-comp',
  template:
  `<div class="activity-stream-body">
    <div *ngFor='let feed of feedComponent'>
      <feed-item [feed]='feed'></feed-item>
    </div>
  </div>`
})

export class MainComponent {
  feedComponent: FeedComponent[];
  constructor(private feedService: FeedService) {}
  getFeedItems() {
    this.feedService.getFeedData().subscribe(data => {
      console.log(data);
      this.feedComponent = data;
    });
  }
  ngOnInit() {
    this.getFeedItems();
  }
};
