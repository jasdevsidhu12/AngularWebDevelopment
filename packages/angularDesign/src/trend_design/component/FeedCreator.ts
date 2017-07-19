import { Component, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';

@Component({
    selector: 'feed-creator',
    template: `<div class="feed-creator">
                <input id="uploadFile" type="file" />
                <textarea #myMessage [(ngModel)]="feedMessage" type="text" placeholder="Anything to Share">
                </textarea>
                <button (click)="postItem($event)">Post</button>
               </div>`
})

export class FeedCreator {
    constructor(private elRef:ElementRef) {}
    @ViewChild('myMessage') myMessage: any;
    feedMessage: HTMLTextAreaElement;
    feedMessageJson: any;
    @Output() postNewItem = new EventEmitter();
    ngOnInit() {
        this.feedMessageJson = {
            "published": "2017-06-09T10:45:55Z",
            "actor": {
                "url": "",
                "id": "",
                "displayName": "Jasdev Sidhu",
                "image": "../../resources/data/profile_images/trevor_noah.jpeg"
            },
            "title": "posted a message",
            "object" : {
                "objectType": "text",
                "id": "",
                "url": "",
                "summary": ""
            }
        }
    }
    postItem(event: UIEvent) {
        if(this.feedMessage.innerText !== '') {
            this.feedMessageJson.object.summary = this.myMessage.nativeElement.value.replace('\n',"<br />");
            this.postNewItem.emit(this.feedMessageJson);
            console.log('done');
        }
    }
}