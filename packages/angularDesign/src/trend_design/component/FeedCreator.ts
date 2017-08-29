import { Component, EventEmitter, ViewChild, Output, Input } from '@angular/core';
import UploadMediaAPI from '../api/UploadMediaAPI';

@Component({
    selector: 'feed-creator',
    template: `<div class="feed-creator">
                <input #discusionGroupName class="feed-dis-group-input"
                type="text" placeholder="create a new discussion group" />
                <span> or / and </span>
                <textarea #myMessage [(ngModel)]="feedMessage" type="text"
                    placeholder="post a message to your colleagues">
                </textarea>
                <div class="feed-btn-panel">
                    <div>
                        <label for="file-upload" #labelForUpload class="feed-btn-ui upload-btn">
                            Upload Images
                        </label>
                        <input #uploadFile id="file-upload" type="file" accept='image/*' multiple/>
                    </div>
                    <div>
                        <label class="feed-btn-ui" (click)="postItem($event)">Post</label>
                    </div>
               </div>`
})

export class FeedCreator {
    @ViewChild('myMessage') myMessage: any;
    @ViewChild('uploadFile') uploadFile: any;
    @ViewChild('labelForUpload') labelForUpload: any;
    @ViewChild('discusionGroupName') disGrpName: any;
    @Input('feedLength')feedLength: any;

    @Output() postNewItem = new EventEmitter();
    uploadMedia = new UploadMediaAPI();
    feedMessageJson: any;
    ngOnInit():void {
        this.uploadMedia.setMediaObject(this.uploadFile, this.labelForUpload);
    }
    postItem(event: UIEvent) {
        const uniqueID = parseInt(this.feedLength) + 1;
        this.feedMessageJson = Object.assign({}, {
            "id": uniqueID,
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
            },
            "comment": []
        });
        this.uploadMedia.setMediatoFeed(this.feedMessageJson).then((isMediaSetToFeed) => {
            this.checkAndSetDiscussionGroup();
            if (this.myMessage.nativeElement.value.toString() !== '') {
                this.feedMessageJson.object.summary =
                this.myMessage.nativeElement.value.replace('\n',"<br />");
                this.feedMessageJson.published = new Date().toISOString();
                this.postNewItem.emit(this.feedMessageJson);
            } else if (isMediaSetToFeed) {
                 this.feedMessageJson.published = new Date().toISOString();
                this.postNewItem.emit(this.feedMessageJson);
            }
            this.clearFeedCreatorInputs();
        });
    }
    checkAndSetDiscussionGroup() {
        const disGrpName = this.disGrpName.nativeElement.value;
        if(disGrpName !== '') {
            this.feedMessageJson.title =
            'created a discussion group <a href>' + disGrpName + '</a>';
        }
    }
    clearFeedCreatorInputs() {
        this.disGrpName.nativeElement.value = '';
        this.labelForUpload.nativeElement.innerText = 'Upload Images';
        this.myMessage.nativeElement.value = '';
    }
}