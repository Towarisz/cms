import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  login = 0; // 0 - nie zalogowany , 1 - zalogowany , 2 - admin
  constructor(private http: HttpClient) {
    let data = sessionStorage.getItem('user');
    data ? (this.login = Number(data)) : sessionStorage.setItem('user', '0');
  }
  loginRequest(login: String, pass: String) {
    return this.http.post('http://127.0.0.1:5000/login', {
      params: { login: login, pass: pass },
    });
  }
  register(login: String, pass: String) {
    return this.http.post('http://127.0.0.1:5000/register', {
      params: { login: login, pass: pass },
    });
  }
}
