import { NewsDataService } from './../news-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPopupComponent } from './../add-popup/add-popup.component';
import { UserInfoService } from './../user-info.service';
import { BannerDataService } from './../banner-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  bannerList: any;
  newsList: any;
  cardList: any;
  constructor(
    private bannerData: BannerDataService,
    private newsData: NewsDataService,
    public userInfo: UserInfoService,
    public dialog: MatDialog
  ) {
    this.loadBannerData();
    this.loadNewsData();
    this.cardList = [
      {
        title: 'tak',
        content: 'XDXD',
        img: 'https://picsum.photos/id/255/500',
      },
    ];
  }
  addBanner() {
    const dialogRef = this.dialog.open(AddPopupComponent, {
      data: { title: 'Dodaj Obraz', type: 1 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined && result.link != '') {
        this.bannerData
          .addData(result.title, result.content, result.link)
          .subscribe(() => {
            this.loadBannerData();
          });
      }
    });
  }
  deletePost(id: any) {
    this.bannerData.deletePost(id).subscribe(() => {
      this.loadBannerData();
    });
  }
  loadBannerData() {
    this.bannerData.getData().subscribe((result: any) => {
      this.bannerList = result.data;
    });
  }
  loadNewsData() {
    this.newsData.getData(0, 3).subscribe((result: any) => {
      this.newsList = result.data;
    });
  }
  addCard() {
    const dialogRef = this.dialog.open(AddPopupComponent, {
      data: { title: 'Dodaj Obraz', type: 1 },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined && result.link != '') {
        this.bannerData
          .addData(result.title, result.content, result.link)
          .subscribe(() => {
            this.loadBannerData();
          });
      }
    });
  }
  deleteCard(id: any) {
    this.bannerData.deletePost(id).subscribe(() => {
      this.loadBannerData();
    });
  }
}
