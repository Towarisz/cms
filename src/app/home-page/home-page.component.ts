import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/2000/500`
  );

  newsList: Array<any>;
  constructor() {
    this.newsList = [{ title: 'tak', content: 'XDXD' }];
  }
}
