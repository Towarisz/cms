import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-theme-edit-popup',
  templateUrl: './theme-edit-popup.component.html',
  styleUrls: ['./theme-edit-popup.component.scss']
})
export class ThemeEditPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ThemeEditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

