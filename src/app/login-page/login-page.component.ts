import { UserInfoService } from './../user-info.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @Input() pass: any;
  @Input() userN: any;
  buttonText: string | undefined;
  pageType: number | undefined;
  constructor(private route: ActivatedRoute, public userInfo: UserInfoService) {
    this.pass = '';
    this.userN = '';
    this.route.params.subscribe((params: any) => {
      this.pageType = params['id'];
      this.pageType == 0
        ? (this.buttonText = 'sign up')
        : (this.buttonText = 'sign in');
    });
  }

  send(event: any) {
    event.preventDefault();
    //logowanie + server side
    this.userInfo.login = 1;
    sessionStorage.setItem('user', '1');
  }
}
