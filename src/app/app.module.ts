import { NewsDataService } from './news-data.service';
import { BannerDataService } from './banner-data.service';
import { GaleryDataService } from './galery-data.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NewsComponent } from './news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContentCardComponent } from './content-card/content-card.component';
import { GaleryPageComponent } from './galery-page/galery-page.component';
import { UserInfoService } from './user-info.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { GaleryImgComponent } from './galery-img/galery-img.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPopupComponent } from './add-popup/add-popup.component';
import { ShortenContentPipe } from './shorten-content.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { MatTableModule } from '@angular/material/table';
import { UserPermitionPipe } from './user-permition.pipe';
import { EditUserPopupComponent } from './edit-user-popup/edit-user-popup.component';
import { MatSelectModule } from '@angular/material/select';
import { ThemePageComponent } from './theme-page/theme-page.component';
import { CardDataService } from './card-data.service';
import { ImgScalePopupComponent } from './img-scale-popup/img-scale-popup.component';
import { ChangeThemeService } from './change-theme.service';
import { ThemeEditPopupComponent } from './theme-edit-popup/theme-edit-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NewsComponent,
    LoginPageComponent,
    ContentCardComponent,
    GaleryPageComponent,
    GaleryImgComponent,
    NewsPageComponent,
    AddPopupComponent,
    ShortenContentPipe,
    UserListPageComponent,
    UserPermitionPipe,
    EditUserPopupComponent,
    ThemePageComponent,
    ImgScalePopupComponent,
    ThemeEditPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'galery', component: GaleryPageComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'login/:id', component: LoginPageComponent },
      { path: 'userList', component: UserListPageComponent },
      { path: 'theme', component: ThemePageComponent },
    ]),
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [
    UserInfoService,
    GaleryDataService,
    BannerDataService,
    NewsDataService,
    CardDataService,
    ChangeThemeService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
