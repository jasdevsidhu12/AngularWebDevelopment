import { Component, Input } from '@angular/core';

@Component({
  selector: 'feed-item-body-media',
  template:
  `
  <div class="feed-item-body-media">
    <ngb-carousel>
        <ng-container>
            {{ print(attachments) }}
            <ng-template ngbSlide *ngFor="let slide of attachments">
                <img src="{{ slide.url }}" />
            </ng-template>
        </ng-container>
    </ngb-carousel>
  </div>`
})

export class FeedItemBodyMedia {
    @Input()attachments: any;
    print(obj:any) {
        //  debugger;
    }
}