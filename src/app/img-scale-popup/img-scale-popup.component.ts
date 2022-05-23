import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-scale-popup',
  templateUrl: './img-scale-popup.component.html',
  styleUrls: ['./img-scale-popup.component.scss'],
})
export class ImgScalePopupComponent {
  constructor(
    public dialogRef: MatDialogRef<ImgScalePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
