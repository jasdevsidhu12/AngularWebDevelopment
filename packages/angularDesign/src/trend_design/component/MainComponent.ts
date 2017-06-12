import { Component, ViewEncapsulation } from '@angular/core';
import { FeedComponent, FeedService} from '../service/FeedService';

@Component({
  selector: 'main-comp',
  template:
  `<div class="activity-stream-body">
    <div *ngFor='let feed of realFeedComponent'>
      <feed-item [feed]='feed'></feed-item>
    </div>
  </div>`
})

export class MainComponent {
  realFeedComponent: FeedComponent[];
  constructor(private feedService: FeedService) {}
  getFeedItems() {
    this.feedService.getFeedData().subscribe(data => {
      console.log(data);
      this.realFeedComponent = data;
    });
  }
  ngOnInit() {
    this.getFeedItems();
  }
};
