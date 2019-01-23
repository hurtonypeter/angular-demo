import { Component } from '@angular/core';
import { BookDetailsModel } from '../models/book-details.model';
import { BooksApiClientService } from '../clients/books-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookFormModel } from '../components/book-form/book-form.model';

@Component({
  templateUrl: './book-edit.page.component.html'
})
export class BookCreatePageComponent {

  book = {};

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private booksApiClient: BooksApiClientService
  ) { }

  save(book: BookFormModel): void {
    console.log(book);
  }

  cancel(): void {
    console.log('navigating back');
    this.location.back();
  }
}
