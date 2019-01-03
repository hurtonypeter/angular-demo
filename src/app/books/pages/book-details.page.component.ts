import { Component, OnInit } from '@angular/core';
import { BooksApiClientService } from '../clients/books-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsModel } from '../models/book-details.model';

@Component({
  templateUrl: './book-details.page.component.html'
})
export class BookDetailsPageComponent implements OnInit {

  book: BookDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private booksApiClient: BooksApiClientService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.booksApiClient
      .getBookDetails(id)
      .subscribe(res => this.book = res);
  }

  ratingClicked(rating: number): void {
    console.log(rating);
  }
}
