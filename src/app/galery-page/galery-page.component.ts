import { GaleryDataService } from './../galery-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery-page',
  templateUrl: './galery-page.component.html',
  styleUrls: ['./galery-page.component.scss'],
})
export class GaleryPageComponent implements OnInit {
  dataSource: any;
  pageIndex: number;
  pageSize: number;
  length: number;
  constructor(public galeryData: GaleryDataService) {
    this.pageIndex = 0;
    this.pageSize = 0;
    this.length = 0;
  }

  ngOnInit() {
    this.getServerData();
  }

  public getServerData(event?: any) {
    let _pageIndex = 0;
    let _pageSize = 3;
    if (event) {
      _pageIndex = event.pageIndex;
      _pageSize = event.pageSize;
    }
    this.galeryData.getData(_pageIndex, _pageSize).subscribe(
      (response: any) => {
        if (response.error) {
          // handle error
        } else {
          this.dataSource = response.data;
          this.length = response.length;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
