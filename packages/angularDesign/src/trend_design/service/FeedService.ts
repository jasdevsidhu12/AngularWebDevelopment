import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import * as moment from 'moment';

@Injectable()
export class FeedService {
  constructor(){}
  getFeedData() {
    return new Promise((resolve) => {
      axios.get('../../resources/data/realActivityStream.json')
      .then((data: any) => {
        const news = data.data.news;
        news.map((obj:any) => {
          if (obj) {
            obj.published = moment(obj.published).fromNow();
          }
        });
        resolve(data.data.news);
      });
    });
  }
}
