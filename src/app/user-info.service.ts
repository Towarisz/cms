import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  login = 0; // 0 - nie zalogowany , 1 - zalogowany , 2 - admin
  constructor() {
    let data = sessionStorage.getItem('user');
    data ? (this.login = Number(data)) : sessionStorage.setItem('user', '0');
  }
}
