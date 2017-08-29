import { Component, ViewEncapsulation } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import  { IAppState } from '../reducer/FIReducer'
import { FIAction } from '../action/FIAction';
import { Observable } from 'rxjs';
import { configureStore } from '../store/store';
import * as moment from 'moment';

@Component({
  selector: 'main-comp',
  template:
  `<div>
    <div *ngIf='isLoadingComponent'>
      Loading componets .................
    </div>
    <div *ngIf='!isLoadingComponent' class="activity-stream-body">
      <feed-creator (postNewItem)="postNewItem($event)"
      feedLength="{{ realFeedComponent.length }}">
      </feed-creator>
      <div *ngFor='let feed of realFeedComponent'>
        <feed-item
        [fdID]='feed.id'
        [fdFullName]='feed.actor.displayName'
        [fdProfilePicUrl]='feed.actor.image'
        [fdTitle]='feed.title'
        [fdObject]='feed.object'
        [fdTimeStamp]='feed.published'
        [fdComment]='feed.comment'></feed-item>
      </div>
    </div>
  </div>`
})

export class MainComponent {
  realFeedComponent: Array<any>;
  isLoadingComponent: boolean;

  constructor(private ngRedux: NgRedux<IAppState>, private fIAction: FIAction) {}
  
  ngOnInit() {
    this.ngRedux.subscribe(() => {
      this.updateState();
    });
    this.fIAction.loadInitialFeedAction();
  }
  updateState() {
    this.realFeedComponent = this.ngRedux.getState().feed;
    this.isLoadingComponent = this.ngRedux.getState().isContentLoading;
  }
  postNewItem(feedItem: any) {
    this.fIAction.addNewFeedItemAction(feedItem);
  }
};
