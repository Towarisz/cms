import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galery-img',
  templateUrl: './galery-img.component.html',
  styleUrls: ['./galery-img.component.scss'],
})
export class GaleryImgComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
