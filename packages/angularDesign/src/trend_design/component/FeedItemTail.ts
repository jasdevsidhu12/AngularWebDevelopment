import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'feed-item-tail',
  template:
  `<div class="feed-item-tail">
    <div class="{ 'anchor-comment': showComment}">
        <b>{{ numOfComments(comment.length) }}
            <a (click)="commentClickEvent($event)" class="comment-link">
                Comments
            </a>
        </b>
    </div>
    <div *ngIf="showComment" class="feed-comment-wrapper">
        <feed-comment-creator [imgUrl]="profilePicUrl"
        [itemID]='itemID' [name]="fullName">
        </feed-comment-creator>
        <div *ngFor='let comm of comment'>
            <feed-item-tail-comment [imgUrl]="comm.actor.url" [name]="comm.actor.displayName"
            [timestamp]="convertToMoment(comm.published)"
            [content]="comm.object.summary">
            </feed-item-tail-comment>
        </div>
    </div>
  </div>`
})

export class FeedItemTail {
    @Input()itemID: string;
    @Input()comment: Array<any>;
    @Input()fullName: string;
    @Input()profilePicUrl: string;
    showComment: boolean;

    ngOnInit():void {
        this.showComment = false;
    }

    numOfComments(numOfComments:number) {
        if (numOfComments > 0) {
            return numOfComments;
        } else {
            return "No";
        }

    }
    commentClickEvent() {
        this.showComment = this.showComment ? false : true;
    }
    convertToMoment(date: string){
        return moment(date).fromNow();
    }
}