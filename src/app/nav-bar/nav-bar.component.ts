import { UserInfoService } from './../user-info.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(public userInfo: UserInfoService) {}

  logOut() {
    this.userInfo.login = 0;
    sessionStorage.setItem('user', '0');
  }
}
