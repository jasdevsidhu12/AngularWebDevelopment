import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'feed-item-tail',
  template:
  `<div class="feed-item-tail">
    <div *ngIf="comment" [ngClass]="{ 'anchor-comment': showComment}">
        <b>{{ count }}
            <a (click)="commentClickEvent($event)" class="comment-link">
                Comments
            </a>
        </b>
    </div>
    <div *ngIf="!comment" class='comment-link'>
        <b>Comments</b>
    </div>
    <div *ngIf="comment && showComment" class="feed-comment-wrapper">
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
    @Input()comment: Array<any>;
    count: number;
    showComment: boolean;
    ngOnInit() {
        this.showComment = false;
        if (this.comment) {
            this.count = this.comment.length;
        }
    }
    commentClickEvent() {
        this.showComment = this.showComment ? false : true;
    }
    convertToMoment(date: string){
        return moment(date).startOf('day').fromNow();
    }
}