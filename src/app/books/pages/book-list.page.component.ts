import { Component, OnInit } from '@angular/core';
import { BooksApiClientService } from '../clients/books-api-client.service';
import { BookListModel } from '../models/book-list.model';

@Component({
  templateUrl: './book-list.page.component.html'
})
export class BookListPageComponent implements OnInit {

  books: BookListModel[];

  constructor(private booksApiClient: BooksApiClientService) { }

  ngOnInit() {
    this.booksApiClient.getBooks().subscribe(res => this.books = res);
  }

  getFaIconForStock(inStock: boolean) {
    console.log('getFaIconForStock');
    return inStock ? 'fa fa-check' : 'fa fa-times';
  }
}
