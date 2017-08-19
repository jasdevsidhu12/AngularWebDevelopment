import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { NgRedux, select } from 'ng2-redux';
import  { IAppState } from '../reducer/FIReducer'
import { addNewCommentAction } from '../action/FIAction';
import { Observable } from 'rxjs';

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
    <div (click)="addNewComment()">
      {{ (counter$ | async) }}
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
  @select()counter$: Observable<number>;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    if (this.feed) {
      this.fullName = this.feed.actor.displayName;
      this.profilePicUrl = this.feed.actor.image;
      this.typeOfPost = this.feed.title;
      this.object = this.feed.object;
      this.timeStamp = moment(this.feed.published).fromNow();
      this.comment = this.feed.comment;
    }
  }
    addNewComment() {
        console.log('Adding New Comment !!!!!!!!');
        addNewCommentAction(this.ngRedux.dispatch);
    }
};
