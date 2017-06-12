import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

export class FeedComponent {
  constructor(
    published: string,
    actor: any,
    verb: string,
    title: string,
    object: any,
    target: any,
    comment: Array<any>){}
}

@Injectable()
export class FeedService {
  constructor(private http: Http){}
  getFeedData() {
    return this.http.get('../../resources/data/realActivityStream.json').map((response: Response) => {
     return response.json().news; });
  }
}
