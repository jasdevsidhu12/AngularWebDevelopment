import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


export class FeedComponent {
  constructor(public firstName: string, public lastName: string,
  public profilePic: string, public type: string, public title: string,
  public summary: string, public timestamp: string) {}
}

@Injectable()
export class FeedService {
  constructor(private http: Http){}
  getFeedData() {
    return this.http.get('../../resources/data/activityStream.json').map((response: Response) => {
      return <FeedComponent []>response.json().news; });
  }
}
