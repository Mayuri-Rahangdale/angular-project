import { Component } from '@angular/core';

@Component({
  selector: 'app-book-interest',
  templateUrl: './book-interest.component.html',
  styleUrls: ['./book-interest.component.css'],
})
export class BookInterestComponent {
  favoriteBook: string = '';
  receivedBooks: string[] = [];
  receivedBook: string = '';

  receivedBookFromChild(book: string) {
    this.receivedBook = book;
  }

  receivedBooksFromChild(books: string[]) {
    this.receivedBooks = books;
  }

  sendBook() {
    this.receivedBook = this.favoriteBook;
  }
}
