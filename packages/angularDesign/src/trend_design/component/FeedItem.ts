import { Component } from '@angular/core';

@Component({
  selector: 'feed-item',
  template:
  `<div class="feed-item-wrapper">
    <img src="../../../resources/data/profile_images/trevor_noah.jpeg"
    class="feed-profile-image"/>
    <div  class="feed-item">
      <feed-item-header>
      </feed-item-header>
      <feed-item-body>
      </feed-item-body>
    </div>
   </div>
  `
})

export class FeedItem {
};
