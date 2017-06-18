import {} from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FeedItemBody } from '../../../../trend_design/component/FeedItemBody'

describe('FeedItemBody (inline shallow template)', ()=>{
    let comp:    FeedItemBody;
    let fixture: ComponentFixture<FeedItemBody>;
    let de:      DebugElement;
    let el:      HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ FeedItemBody ], schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(FeedItemBody);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('.feed-item-body'));
        el = de.nativeElement;
    });
    it('should be defined and it\'s a \'DIV\' elment', ()=>{
        expect(el).toBeDefined()
        expect(el.nodeName).toEqual('DIV', 'it should be a node element');
    });
    it('should have at least one children', ()=>{
        expect(el.children.length).toEqual(1, 'it should have one children if there is no attachments object');
    });
    it('should have two children if FeedObject attachments property is valid', () => {
        comp.FeedObject = { attachments: []};
        fixture.detectChanges();
        expect(el.children.length).toEqual(2, 'it should two children if there is an attachments object');
    });
});
