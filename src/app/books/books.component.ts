import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  @Input() receivedBook: string = '';
  @Input() receivedBooks: string[] = [];

  @Output() sendBookToParent = new EventEmitter<string>();
  @Output() sendBooksToParent = new EventEmitter<string[]>();

  sendBook() {
    this.sendBookToParent.emit(this.receivedBook);
  }

  sendBooks() {
    const booksArray = ['Book1', 'Book2', 'Book3'];
    this.sendBooksToParent.emit(booksArray);
  }
}
