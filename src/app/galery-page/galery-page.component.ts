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
    this.getServerData(1, 3);
  }

  public getServerData(page: number, count: number) {
    // this.galeryData.getData(page, count).subscribe(
    //   (response: any) => {
    //     if (response.error) {
    //       // handle error
    //     } else {
    //       this.dataSource = response.data;
    //       this.length = response.length;
    //       this.pageIndex = page;
    //       this.pageSize = count;
    //     }
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );
  }
}
