import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'feed-item',
  template:
  `<div class="feed-item-wrapper">
    <img src="{{ profilePicUrl }}" class="feed-profile-image"/>
    <div  class="feed-item">
      <feed-item-header [name]='fullName' [typeOfPost]='typeOfPost' [timeStamp]='timeStamp'>
      </feed-item-header>
      <feed-item-body [FeedObject]='object'>
      </feed-item-body>
      <feed-item-tail [comment]='comment' [fullName]='fullName' [profilePicUrl]='profilePicUrl'>
      </feed-item-tail>
    </div>
   </div>
  `
})

export class FeedItem {
  @Input()feed: any;
  profilePicUrl: string;
  fullName: string;
  typeOfPost: string;
  object: any;
  timeStamp: string;
  comment: Array<any>;
  ngOnInit() {
    console.log(this.feed);
    if (this.feed) {
      this.fullName = this.feed.actor.displayName;
      this.profilePicUrl = this.feed.actor.image;
      this.typeOfPost = this.feed.title;
      this.object = this.feed.object;
      this.timeStamp = moment(this.feed.published).fromNow();
      this.comment = this.feed.comment;
    }
  }
};
