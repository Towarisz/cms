import { CardDataService } from './../card-data.service';
import { UserInfoService } from './../user-info.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent {
  @Input() card:
    | { title: String; content: string; link: string; id: string }
    | undefined;
  @Output() reloadCardData = new EventEmitter<string>();
  constructor(
    public userInfo: UserInfoService,
    public cardData: CardDataService
  ) {}

  deletePost() {
    this.cardData.deletePost(this.card?.id).subscribe(() => {
      this.reloadCardData.emit('reloadCardData');
    });
  }
}
