import { Component } from '@angular/core';
import { ChangeThemeService } from '../change-theme.service';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss'],
})
export class ThemePageComponent {
  theme: number = 1;
  constructor(public changeTheme:ChangeThemeService) {
    let _theme = window.localStorage.getItem("theme")
    if(_theme){
      this.theme = parseInt(_theme);      
      this.setTheme()
    }else{
      window.localStorage.setItem("theme",this.theme.toString())
    }
  }

  setTheme(){
    this.changeTheme.setTheme(this.theme)
    window.localStorage.setItem("theme",this.theme.toString())
  }
}
