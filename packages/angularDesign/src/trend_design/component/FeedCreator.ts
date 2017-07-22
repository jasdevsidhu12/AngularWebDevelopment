import { Component, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';

@Component({
    selector: 'feed-creator',
    template: `<div class="feed-creator">
                <input #uploadFile type="file" multiple />
                <textarea #myMessage [(ngModel)]="feedMessage" type="text"
                    placeholder="Anything to Share">
                </textarea>
                <button (click)="postItem($event)">Post</button>
               </div>`
})

export class FeedCreator {
    constructor(private elRef:ElementRef) {}
    @ViewChild('myMessage') myMessage: any;
    @ViewChild('uploadFile') uploadFile: any;
    @Output() postNewItem = new EventEmitter();
    feedMessage: HTMLTextAreaElement;
    feedMessageJson: any;
    
    postItem(event: UIEvent) {
        this.feedMessageJson = new Object();
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
        };
        this.uploadFilefunc().then(() => {
            if(this.feedMessage.innerText !== '') {
                this.feedMessageJson.object.summary =
                this.myMessage.nativeElement.value.replace('\n',"<br />");
                this.postNewItem.emit(this.feedMessageJson);
            }
        });
    }
    uploadFilefunc() {
        return new Promise((resolve) => {
            const domElem = this.uploadFile.nativeElement;
            if (domElem.files[0]) {
                this.feedMessageJson.object['attachments'] = [];
                this.loopMultipleFiles(domElem.files).then(() => {
                    resolve(true);
                });
            }
            resolve(true);
        });
    }
    loopMultipleFiles(files: Array<any>, count=0) {
        return new Promise((resolve) => {
            if (count < files.length) {
                this.convertFiletoUrl(files[count]).then(() => {
                    count++;
                    this.loopMultipleFiles(files, count);
                    resolve(true);
                });
            } else {
                resolve(true);
            }
        });
    }
    convertFiletoUrl(files: any) {
        return new Promise((resolve) => {
            const fileReader = new FileReader();
            fileReader.onloadend = (fsevent) => {
                this.feedMessageJson.object.attachments.push({
                    "objectType": "image",
                    "url": fileReader.result,
                    "width": "200",
                    "height": "200"
                });
                resolve(true);
            }
            fileReader.readAsDataURL(files);
        });
    }
}