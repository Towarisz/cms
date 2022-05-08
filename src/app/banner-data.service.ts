import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BannerDataService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.post('http://127.0.0.1:5000/bannerData', {});
  }
  addData(title: any, content: any, link: any) {
    return this.httpClient.post('http://127.0.0.1:5000/addBannerImg', {
      params: { title: title, content: content, link: link },
    });
  }
  deletePost(data: any) {
    return this.httpClient.post('http://127.0.0.1:5000/deleteBannerImg', {
      params: { id: data },
    });
  }
}
