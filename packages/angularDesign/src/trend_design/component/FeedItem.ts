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
      <feed-item-body [summary]='summary'>
      </feed-item-body>
    </div>
   </div>
  `
})

export class FeedItem {
  @Input()feed: any;
  profilePicUrl: string;
  fullName: string;
  typeOfPost: string;
  summary: string;
  timeStamp: string;
  ngOnInit() {
    this.fullName = this.feed.firstName + " " + this.feed.lastName;
    this.typeOfPost = this.feed.type;
    this.summary = this.feed.summary;
    this.profilePicUrl = this.feed.profilePic;
    this.timeStamp = moment(this.feed.timestamp).startOf('day').fromNow();
  }
};
