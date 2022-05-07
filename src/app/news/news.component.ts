import { UserInfoService } from './../user-info.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() list: { title: String; content: String } | undefined;
  constructor(public userInfo: UserInfoService) {}
}
