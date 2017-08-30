import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { NgRedux, select } from 'ng2-redux';
import  { IAppState } from '../reducer/FIReducer'
import { FIAction } from '../action/FIAction';
import { Observable } from 'rxjs';
import { configureStore } from '../store/store';

@Component({
  selector: 'feed-item',
  template:
  `<div class="feed-item-wrapper">
    <img src="{{ fdProfilePicUrl }}" class="feed-profile-image"/>
    <div  class="feed-item">
      <feed-item-header [name]='fdFullName' [typeOfPost]='fdTitle' [timeStamp]='fdTimeStamp'>
      </feed-item-header>
      <feed-item-body [FeedObject]='fdObject'>
      </feed-item-body>
      <feed-item-tail [comment]='fdComment' [itemID]='fdID' [fullName]='fdFullName'
      [profilePicUrl]='fdProfilePicUrl'>
      </feed-item-tail>
    </div>
   </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FeedItem {
  @Input()fdID: string;
  @Input()fdProfilePicUrl: string;
  @Input()fdFullName: string;
  @Input()fdTitle: string;
  @Input()fdObject: any;
  @Input()fdTimeStamp: string;
  @Input()fdComment: Array<any>;
};
