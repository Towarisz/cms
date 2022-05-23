import { UserInfoService } from './../user-info.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() list: { title: String; content: String } | undefined;
  @Output() delete = new EventEmitter<string>();
  constructor(public userInfo: UserInfoService) {}
  deletePost() {
    this.delete.emit('delete');
  }
}
