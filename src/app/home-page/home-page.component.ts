import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  newsList: Array<any>;
  constructor() {
    this.newsList = [{ title: 'tak', content: 'XDXD' }];
  }

  ngOnInit(): void {}
}
