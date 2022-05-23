import { UserInfoService } from './../user-info.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-galery-img',
  templateUrl: './galery-img.component.html',
  styleUrls: ['./galery-img.component.scss'],
})
export class GaleryImgComponent implements OnInit {
  @Input() data: any;
  @Input() index: any;
  @Output()
  delete = new EventEmitter();
  @Output()
  scale = new EventEmitter();
  constructor(public userInfo: UserInfoService) {}

  ngOnInit(): void {}

  deletePost() {
    this.delete.emit('delete');
  }
  scaleImg() {
    this.scale.emit('scale');
  }
}
