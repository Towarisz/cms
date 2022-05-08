import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  constructor(private httpClient: HttpClient) {}
  getData(page: number, count: number) {
    return this.httpClient.post('http://127.0.0.1:5000/newsData', {
      params: { page: page, count: count },
    });
  }
  addData(title: any, content: any) {
    return this.httpClient.post('http://127.0.0.1:5000/addNews', {
      params: { title: title, content: content },
    });
  }
  deletePost(data: any) {
    return this.httpClient.post('http://127.0.0.1:5000/deleteNews', {
      params: { id: data },
    });
  }
}
