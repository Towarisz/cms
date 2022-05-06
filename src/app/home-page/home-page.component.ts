import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1900/500`
  );

  newsList: Array<any>;
  constructor() {
    this.newsList = [
      { title: 'tak', content: 'XDXD' },
      { title: 'tak', content: 'XDXD' },
      { title: 'tak', content: 'XDXD' },
    ];
  }
}
