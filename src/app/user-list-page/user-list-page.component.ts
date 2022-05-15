import { UserInfoService } from './../user-info.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
})
export class UserListPageComponent {
  displayedColumns: string[] = ['login', 'pass', 'value', 'edit'];
  dataSource: any[] = [];
  constructor(private userInfo: UserInfoService) {
    this.loadData();
  }
  deleteUser(id: string) {
    this.userInfo.deleteUser(id).subscribe(() => {
      this.loadData();
    });
  }
  loadData() {
    this.userInfo.getUsers().subscribe((response: any) => {
      this.dataSource = response.data;
    });
  }
}
