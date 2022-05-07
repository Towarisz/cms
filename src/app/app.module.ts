import { GaleryDataService } from './galery-data.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    FaqPageComponent,
    AboutPageComponent,
    NewsComponent,
    LoginPageComponent,
    ContentCardComponent,
    GaleryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'galery', component: GaleryPageComponent },
      { path: 'faq', component: FaqPageComponent },
      { path: 'login/:id', component: LoginPageComponent },
      { path: 'about', component: AboutPageComponent },
    ]),
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
  ],
  providers: [UserInfoService, GaleryDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
