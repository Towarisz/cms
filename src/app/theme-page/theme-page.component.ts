import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeThemeService } from '../change-theme.service';
import { ThemeEditPopupComponent } from '../theme-edit-popup/theme-edit-popup.component';

@Component({
  selector: 'app-theme-page',
  templateUrl: './theme-page.component.html',
  styleUrls: ['./theme-page.component.scss'],
})
export class ThemePageComponent {
  theme: number = 1;
  constructor(public changeTheme:ChangeThemeService,public dialog: MatDialog,) {
    let _theme = window.localStorage.getItem("theme")
    if(_theme){
      this.theme = parseInt(_theme);      
      this.setTheme()
    }else{
      window.localStorage.setItem("theme",this.theme.toString())
    }
  }

  setTheme(){
    this.changeTheme.setTheme(this.theme)
    window.localStorage.setItem("theme",this.theme.toString())
  }
  editTheme(){
   
      const dialogRef = this.dialog.open(ThemeEditPopupComponent, {});
  
      dialogRef.afterClosed().subscribe((result:any) => {
        if (result != undefined) {
        }
      })
    
  }
}
