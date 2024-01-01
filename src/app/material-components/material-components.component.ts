import { Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl, TreeControl } from '@angular/cdk/tree';
import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { BottomSheetContentComponent } from '../bottom-sheet-content/bottom-sheet-content.component';

@Component({
  selector: 'app-material-components',
  templateUrl: './material-components.component.html',
  styleUrls: ['./material-components.component.css'],
})
export class MaterialComponentsComponent {
  isLiked: any;
  isShared: any;

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  toggleShare() {
    this.isShared = !this.isShared;
  }

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetContentComponent);
  }

  openDialog() {
    // Implement your dialog logic here
  }

  // Autocomplete
  books: string[] = ['Book1', 'Book2', 'Book3'];
  filteredBooks!: Observable<string[]>;

  bookControl = new FormControl();
}
