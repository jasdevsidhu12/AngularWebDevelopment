import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class FeedService {
  constructor(){}
  getFeedData() {
    return new Promise((resolve) => {
      axios.get('../../resources/data/realActivityStream.json').then((data: any) => {
        resolve(data.data.news);
      });
    });
  }
}
