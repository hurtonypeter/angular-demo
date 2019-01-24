import { Component, OnInit, Inject } from '@angular/core';
import { BookDetailsModel } from '../models/book-details.model';
import { BooksApiClientService } from '../clients/books-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookFormModel } from '../components/book-form/book-form.model';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';

@Component({
  templateUrl: './book-edit.page.component.html'
})
export class BookEditPageComponent implements OnInit {

  book: BookDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private booksApiClient: BooksApiClientService,
    @Inject(HTTP_INTERCEPTORS) validators
  ) {
    console.log(validators);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.booksApiClient
      .getBookDetails(id)
      .subscribe(res => this.book = res);
  }

  save(book: BookFormModel): void {
    console.log(book);
  }

  cancel(): void {
    this.location.back();
  }
}
