import { Component, Input, ViewChild } from '@angular/core';
import { FIAction } from '../action/FIAction';

@Component({
    selector: 'feed-comment-creator',
    template: `<div class="comment-body">
                <div class="comment-body-left">
                    <img src="{{ imgUrl }}" />
                </div>
                <div class="comment-body-left">
                    <div class="comment-body-name">
                        <b> {{ name }} {{ counter$ }}</b>
                        <label class="feed-btn-ui" (click)="postComment($event)">Post</label>
                    </div>
                    <div class="comment-body-content">
                        <input type="text" #commentInput />
                    </div>
                </div>
            </div>`
})

export class FeedCommentCreator {
    @Input() itemID: string;
    @Input() imgUrl: string;
    @Input() name: string;
    @ViewChild('commentInput') commentInput: any;
    constructor(private fIAction: FIAction){}
    postComment() {
        const commentInput = this.commentInput.nativeElement;
        const newComment = Object.assign({},
            {
                id: this.itemID,
                comment: {
                    "published": "2017-06-11T10:45:55Z",
                    "actor": {
                            "url": this.imgUrl,
                            "id": "",
                            "displayName": this.name
                    },
                    "verb": "comment",
                    "object" : {
                        "objectType": "text",
                        "id": "",
                        "url": "",
                        "summary": "Congratulations Jasdev for your profile."
                    }
                }
            }
    );
    newComment.comment.object.summary = commentInput.value;
    commentInput.value = '';
    newComment.comment.published = new Date().toISOString();
    this.fIAction.addNewFeedCommentAction(newComment);
    }
};