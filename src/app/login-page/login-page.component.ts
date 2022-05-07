import { UserInfoService } from './../user-info.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @Input() pass: any;
  @Input() userN: any;
  error = false;
  buttonText: string | undefined;
  pageType: number | undefined;
  constructor(
    private route: ActivatedRoute,
    public userInfo: UserInfoService,
    private router: Router
  ) {
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
    this.pageType == 0
      ? this.userInfo
          .register(this.userN, this.pass)
          .subscribe((response: any) => {
            this.error = false;
            this.userInfo.login = response.value;
            sessionStorage.setItem('user', response.value);
            this.router.navigate(['']);
          })
      : this.userInfo
          .loginRequest(this.userN, this.pass)
          .subscribe((response: any) => {
            if (response.value != '-1') {
              this.error = false;
              this.userInfo.login = response.value;
              sessionStorage.setItem('user', response.value);
              this.router.navigate(['']);
            } else {
              this.error = true;
            }
          });
  }
}
