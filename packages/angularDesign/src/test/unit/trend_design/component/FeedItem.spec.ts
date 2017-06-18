import {} from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FeedItem } from '../../../../trend_design/component/FeedItem'

describe('FeedItem (inline shallow template)', () => {
    let comp: FeedItem;
    let fixture: ComponentFixture<FeedItem>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FeedItem], schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(FeedItem);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.feed-item-wrapper'));
        el = de.nativeElement;
    });
    it('should be defined and it\'s a \'DIV\' elment', ()=>{
        expect(el).toBeDefined()
        expect(el.nodeName).toEqual('DIV', 'it should be a node element');
    });
    it('should have two children by default', () => {
        expect(el.children.length).toEqual(2);
        expect(el.children[0].nodeName).toBe('IMG', 'first child to be an img element');
        expect(el.children[1].nodeName).toBe('DIV', 'second child to be an div element');
    });
    it('should contain feed-item-header, feed-item-body, feed-item-tail as it\'s components', ()=> {
        expect(el.children[1].children[0].nodeName).toBe('feed-item-header'.toUpperCase(), 'first child is a feed-item-header component');
        expect(el.children[1].children[1].nodeName).toBe('feed-item-body'.toUpperCase(), 'second child is a feed-item-body component');
        expect(el.children[1].children[2].nodeName).toBe('feed-item-tail'.toUpperCase(), 'third child is a feed-item-tail component');
    });
});

/*it('test', ()=> {
        comp.feed = {
            actor: {
                displayName: '',
                image: ''
            },
            title: '',
            object: {},
            published: '',
            comment: []
        };
        comp.ngOnInit();
        console.log(el.innerHTML);
    }); */