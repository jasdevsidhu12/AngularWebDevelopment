import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-body-media',
  template:
  `<div class="feed-item-body-media">
    <ngb-carousel>
        <ng-template ngbSlide *ngFor="let m of media">
            <img src="{{ m.url }}" />
        </ng-template>
    </ngb-carousel>
  </div>`
})

export class FeedItemBodyMedia {
    @Input()attachments : any;
    private media: any;
    ngOnInit() {
        this.media = this.attachments;
    }
}