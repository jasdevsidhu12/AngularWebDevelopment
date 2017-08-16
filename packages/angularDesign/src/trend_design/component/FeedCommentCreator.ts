import { Component, Input } from '@angular/core';

@Component({
    selector: 'feed-comment-creator',
    template: `<div class="comment-body">
                <div class="comment-body-left">
                    <img src="{{ imgUrl }}" />
                </div>
                <div class="comment-body-left">
                    <div class="comment-body-name">
                        <b> {{ name }} {{ counter$ }}</b>
                        <button>Post</button>
                    </div>
                    <div class="comment-body-content">
                        <input type="text" />
                    </div>
                </div>
            </div>`
})

export class FeedCommentCreator {
    @Input() imgUrl: string;
    @Input() name: string;
};