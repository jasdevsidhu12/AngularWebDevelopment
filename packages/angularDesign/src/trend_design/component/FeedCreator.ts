import { Component, EventEmitter, ViewChild, Output, Input, OnInit } from '@angular/core';
import UploadMediaAPI from '../api/UploadMediaAPI';
import { newFeed } from '../api/FIUtils';

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

export class FeedCreator implements OnInit {
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
    
    postItem(event: UIEvent):void {
        this.feedMessageJson = Object.assign({}, newFeed, { comment: []});
        this.setDefaultFeedInformation();
        this.checkAndSetDiscussionGroup();
        if (this.uploadMedia.isUserSetMediaToFeed()) {
            this.uploadMedia.setMediatoFeed(this.feedMessageJson)
            .then((feedJSONMedia) => {
                this.clearFeedCreatorInputs();
                this.postNewItem.emit(feedJSONMedia);
            });
        } else {
            this.postNewItem.emit(this.feedMessageJson);
        }
    }

    setDefaultFeedInformation():void {
        if (this.myMessage.nativeElement.value.toString() !== '') {
            this.feedMessageJson.object.summary =
            this.myMessage.nativeElement.value.replace('\n',"<br />");
        }
        this.feedMessageJson.published = new Date().toISOString();
        this.feedMessageJson.id = parseInt(this.feedLength) + 1;
    }

    checkAndSetDiscussionGroup():void {
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