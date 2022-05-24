import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss'],
})
export class ThemePageComponent {
  rootElement: any;
  theme: number = 1;
  constructor() {
    this.rootElement = document.documentElement;
  }

  setTheme() {
    switch (this.theme) {
      case 1:
        this.rootElement.style.setProperty('--background', 'white');
        this.rootElement.style.setProperty('--font-color', 'black');
        this.rootElement.style.setProperty('--second-background', 'white');
        this.rootElement.style.setProperty('--second-font-color', 'black');
        break;
      case 2:
        this.rootElement.style.setProperty('--background', 'rgb(21, 24, 24)');
        this.rootElement.style.setProperty('--font-color', 'whitesmoke');
        this.rootElement.style.setProperty('--second-background', 'grey');
        this.rootElement.style.setProperty('--second-font-color', 'black');
        break;
      case 3:
        this.rootElement.style.setProperty('--background', 'rgb(44, 40, 40)');
        this.rootElement.style.setProperty('--font-color', 'whitesmoke');
        this.rootElement.style.setProperty('--second-background', 'grey');
        this.rootElement.style.setProperty('--second-font-color', 'whitesmoke');
        break;
      case 4:
        this.rootElement.style.setProperty('--background', 'rgb(44, 40, 40)');
        this.rootElement.style.setProperty('--font-color', 'whitesmoke');
        this.rootElement.style.setProperty('--second-background', 'white');
        this.rootElement.style.setProperty('--second-font-color', 'black');
        break;
      default:
        break;
    }
  }
}
