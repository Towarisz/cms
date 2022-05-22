import { NewsDataService } from './../news-data.service';
import { UserInfoService } from './../user-info.service';
import { AddPopupComponent } from './../add-popup/add-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  dataSource: any;
  pageIndex: number;
  pageSize: number;
  length: number;
  constructor(
    public newsData: NewsDataService,
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
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }
    this.newsData.getData(this.pageIndex, this.pageSize).subscribe(
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
      data: { title: 'Dodaj Artykuł', type: 2 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.newsData.addData(result.title, result.content).subscribe(() => {
          this.getServerData();
        });
      }
    });
  }

  deletePost(index: number) {
    this.newsData
      .deletePost(this.pageSize * this.pageIndex + index)
      .subscribe(() => {
        this.getServerData();
      });
  }
}
