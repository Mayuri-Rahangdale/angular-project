import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css'],
  template: `
    <div [InnerHTML]="data.message"></div>
    <button mat-button (click)="close()">Close</button>
  `,
})
export class AlertModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AlertModalComponent>
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
