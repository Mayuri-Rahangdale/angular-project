import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  education: string = 'Bachelor of Engineering';
  skills: string[] = ['Angular', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Java'];
  languages: string[] = [
    'English:Proficient',
    'Hindi:Proficient',
    'Marathi:Proficient',
  ];

  constructor(public dialog: MatDialog) {}

  showAlert() {
    this.dialog.open(AlertModalComponent, {
      data: {
        education: this.education,
        skills: this.skills,
        languages: this.languages,
      },

      width: '100%',
    });
  }
}
