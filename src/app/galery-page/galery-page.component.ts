import { GaleryImgComponent } from './../galery-img/galery-img.component';
import { UserInfoService } from './../user-info.service';
import { AddPopupComponent } from './../add-popup/add-popup.component';
import { GaleryDataService } from './../galery-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(
    public galeryData: GaleryDataService,
    public dialog: MatDialog,
    public userInfo: UserInfoService
  ) {
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

  addImg() {
    const dialogRef = this.dialog.open(AddPopupComponent, {
      data: { title: 'Dodaj Obraz', type: 0 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        console.log('dziala');
        this.galeryData.addData(result.link).subscribe(() => {
          this.getServerData();
          this.pageSize = 3;
        });
      }
    });
  }
  deletePost(index: number) {
    console.log(index);
  }
}
