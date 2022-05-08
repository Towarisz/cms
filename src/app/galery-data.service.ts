import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GaleryDataService {
  constructor(private httpClient: HttpClient) {}
  getData(page: number, count: number) {
    return this.httpClient.post('http://127.0.0.1:5000/galeryData', {
      params: { page: page, count: count },
    });
  }
  addData(data: any) {
    return this.httpClient.post('http://127.0.0.1:5000/addGaleryImg', {
      params: { link: data },
    });
  }
}
