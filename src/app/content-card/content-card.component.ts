import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() card: { title: String; content: string; img: string } | undefined;
  constructor() {}

  ngOnInit(): void {}
}
