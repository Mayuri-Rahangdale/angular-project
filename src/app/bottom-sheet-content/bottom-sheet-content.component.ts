import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet-content',
  template: `
    <div>
      <p>Mail 1</p>
      <br />
      <p>Mail 2</p>
      <br />
      <p>Mail 3</p>
      <br />
      <p>Mail 4</p>
    </div>
  `,
  styles: [
    `
    div {
      color: Red;  
      },
  `,
  ],
})
export class BottomSheetContentComponent {}
