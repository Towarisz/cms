import { EditUserPopupComponent } from './../edit-user-popup/edit-user-popup.component';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private userInfo: UserInfoService, public dialog: MatDialog) {
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
  editUser(login: string, pass: string, value: string, id: string) {
    const dialogRef = this.dialog.open(EditUserPopupComponent, {
      data: { login: login, pass: pass, value: value },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.userInfo
          .editUser(result.login, result.pass, result.value, id)
          .subscribe(() => {
            this.loadData();
          });
      }
    });
  }
}
