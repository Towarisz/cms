import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-user-popup',
  templateUrl: './edit-user-popup.component.html',
  styleUrls: ['./edit-user-popup.component.scss'],
})
export class EditUserPopupComponent {
  selected: number = 1;
  constructor(
    public dialogRef: MatDialogRef<EditUserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.selected = data.value;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
