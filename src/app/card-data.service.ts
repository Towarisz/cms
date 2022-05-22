import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardDataService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.post('http://127.0.0.1:5000/cardData', {});
  }
  addData(title: any, content: any, link: any) {
    return this.httpClient.post('http://127.0.0.1:5000/addCard', {
      params: { title: title, content: content, link: link },
    });
  }
  deletePost(data: any) {
    return this.httpClient.post('http://127.0.0.1:5000/deleteCard', {
      params: { id: data },
    });
  }
}
