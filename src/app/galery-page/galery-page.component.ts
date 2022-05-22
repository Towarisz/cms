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
    this.pageSize = 3;
    this.length = 0;
  }

  ngOnInit() {
    this.getServerData();
  }

  public getServerData(event?: any) {
    if (event) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    this.galeryData.getData(this.pageIndex, this.pageSize).subscribe(
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
      data: { title: 'DODAJ OBRAZ', type: 0 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.galeryData.addData(result.link).subscribe(() => {
          this.getServerData();
        });
      }
    });
  }

  deletePost(index: number) {
    this.galeryData
      .deletePost(this.pageSize * this.pageIndex + index)
      .subscribe(() => {
        this.getServerData();
      });
  }
}
