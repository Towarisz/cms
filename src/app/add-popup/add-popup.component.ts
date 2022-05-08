import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-popup',
  templateUrl: './add-popup.component.html',
  styleUrls: ['./add-popup.component.scss'],
})
export class AddPopupComponent implements OnInit {
  @Input() sendData: any;

  constructor(
    public dialogRef: MatDialogRef<AddPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.sendData = { title: '', content: '', link: '' };
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
