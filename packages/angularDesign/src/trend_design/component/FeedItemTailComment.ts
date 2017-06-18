import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-tail-comment',
  template:
  `
    <div class="comment-body">
        <div class="comment-body-left">
            <img src="{{ imgUrl }}" />
        </div>
        <div class="comment-body-left">
            <div class="comment-body-name">
                <b> {{ name }} </b>, {{ timestamp }}
            </div>
            <div class="comment-body-content" [innerHTML]="content">
                {{ content }}
            </div>
        </div>
    </div>
  `
})

export class FeedItemTailComment {
    @Input() imgUrl: string;
    @Input() name: string;
    @Input() timestamp: string;
    @Input() content: string;
}