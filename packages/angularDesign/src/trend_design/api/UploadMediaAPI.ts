export default class UploadMediaAPI {
    feedMessageJson: any;
    uploadFile: any;

    setMediaObject(uploadFile: any, labelForUpload: any) {
        this.uploadFile = uploadFile;
        this.updateUploadButtonUI(labelForUpload);
    }

    updateUploadButtonUI(labelForUpload: any) {
        const domUploadDocElem = this.uploadFile.nativeElement;
        const domLabelElem = labelForUpload.nativeElement;
        domUploadDocElem.onchange = () => {
            const filesLength = domUploadDocElem.files.length;
            domLabelElem.innerText =
            filesLength > 0 ?
            (filesLength > 1 ? filesLength.toString() + ' Images': '1 Image') :
            'Upload Images';
        }
    }

    isUserSetMediaToFeed() {
        const domUploadDocElem = this.uploadFile.nativeElement;
        if (domUploadDocElem.files.length > 0) {
            return true;
        }
        return false;
    }

    setMediatoFeed(feedMessageJson: any) {
        const uploadedFiles = this.uploadFile.nativeElement.files;
        const convertFiles = new Array();
        this.feedMessageJson = { ...feedMessageJson, object: { attachments: [] } };
        this.feedMessageJson.title =
        uploadedFiles.length > 1 ? 'shared images from his document'
        : 'shared an image from his document';
        return new Promise((resolve) => {
            for (let fileIndex = 0; fileIndex < uploadedFiles.length; fileIndex++) {
                convertFiles
                .push(this.convertFiletoUrl(uploadedFiles[fileIndex], fileIndex));
            }
            Promise.all(convertFiles).then((convertedFiles) => {
                this.uploadFile.nativeElement.value = '';
                this.feedMessageJson.object.attachments = [...convertedFiles];
                resolve(this.feedMessageJson);
            });
        });
    }
    convertFiletoUrl(file: any, count: any) {
        const fileReader = new FileReader();
        return new Promise((resolve) => {
            fileReader.onloadend = (fsevent) => {
                 const attachments = {
                    "id": parseInt(count),
                    "objectType": "image",
                    "url": fileReader.result,
                    "width": "200",
                    "height": "200"
                };
                resolve(attachments);
            }
            fileReader.readAsDataURL(file);
        });
    }
}