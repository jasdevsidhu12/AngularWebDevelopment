describe('E2E test for Feed Component', () => {
    beforeAll(() => {
        //  browser.ignoreSynchronization = true;
        browser.get('http://localhost:8080/index.html');
        browser.waitForAngularEnabled(false);
        //  browser.sleep(5000);
    });
    it('make sure that activity-stream wrapper is present', () => {
        const feedWrapper = element.all(by.css('.activity-stream-body'));
        expect(feedWrapper.count()).toEqual(1);
    });
    it('make sure that a feed-item has a profile image source', () => {
        const feedItem = element.all(by.css('.feed-profile-image'));
         expect(feedItem.get(0).getAttribute('src')).toBeDefined();
    });
    it('make sure that a feed-item comment is disable by default', () => {
        const feedItem = element.all(by.css('.feed-item-tail > .feed-comment-wrapper'));
        expect(feedItem.length).toBeUndefined();
    });
    it('make sure that a feed-item comment is enable when click at the comment link', () => {
        const feedItem = element.all(by.css('.feed-item')).get(0);
        feedItem.element(by.css('.comment-link')).click();
        const commentWrapper = feedItem.element(by.css('.feed-comment-wrapper'));
        expect(commentWrapper).toBeDefined();
    });
});