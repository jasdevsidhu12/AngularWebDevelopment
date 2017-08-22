export default class UploadMediaAPI {
    feedMessageJson: any;
    uploadFile: any;

    setMediaObject(uploadFile: any, labelForUpload: any) {
        this.uploadFile = uploadFile;
        this.updateUploadButtonUI(labelForUpload);
    }

    updateUploadButtonUI(labelForUpload: any) {
        const domUploadElem = this.uploadFile.nativeElement;
        const domLabelElem = labelForUpload.nativeElement;
        domUploadElem.onchange = () => {
            const filesLength = domUploadElem.files.length;
            domLabelElem.innerText =
            filesLength > 0 ?
            (filesLength > 1 ? filesLength.toString() + ' Images': '1 Image') :
            'Upload Images';
        }
    }
    setMediatoFeed(feedMessageJson: any) {
        return new Promise((resolve) => {
            this.feedMessageJson = feedMessageJson;
            const domElem = this.uploadFile.nativeElement;
            if (domElem.files.length > 0) {
                this.feedMessageJson.title =
                domElem.files.length > 1 ? 'shared images from his document'
                : 'shared an image from his document' ;
                this.feedMessageJson.object['attachments'] = [];
                this.loopMultipleMediaFiles(domElem.files).then(() => {
                    // reset content
                    domElem.value = '';
                    resolve(true);
                });
            } else {
                resolve(false);
            }
        });
    }
    loopMultipleMediaFiles(files: Array<any>, count=0) {
        return new Promise((resolve) => {
            if (count < files.length) {
                this.convertFiletoUrl(files[count]).then(() => {
                    count++;
                    this.loopMultipleMediaFiles(files, count);
                });
            }
            resolve(true);
            
        });
    }
    convertFiletoUrl(file: any) {
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
            if (file.type.indexOf('image') > -1) {
                fileReader.readAsDataURL(file);
            } else {
                resolve(false);
            }
        });
    }
}