import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksApiClientService } from '../clients/books-api-client.service';
import { BookListModel } from '../models/book-list.model';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, filter, switchMap, map, catchError, tap } from 'rxjs/operators';

@Component({
  templateUrl: './book-list.page.component.html'
})
export class BookListPageComponent implements OnInit, OnDestroy {

  destroy$ = new Subject();
  debouncer$ = new Subject<string>();

  error: string | null = null;
  isLoading = true;
  filter: string;
  books: BookListModel[];

  constructor(private booksApiClient: BooksApiClientService) { }

  ngOnInit() {
    this.loadBooks();
    this.debouncer$
      .pipe(
        filter((x: string) => (x && x.length > 1) || !x),
        debounceTime(500),
        // tslint:disable-next-line:triple-equals
        distinctUntilChanged((x, y) => x == y),
        takeUntil(this.destroy$))
      .subscribe(() => this.loadBooks());

    // this.debouncer$
    //   .pipe(
    //     filter((x: string) => (x && x.length > 1) || !x),
    //     // tslint:disable-next-line:triple-equals
    //     distinctUntilChanged((x, y) => x == y),
    //     debounceTime(500),
    //     tap(() => this.isLoading = true),
    //     switchMap(() =>
    //       this.booksApiClient.getBooks(this.filter).pipe(
    //         map(result => this.books = result)
    //       )
    //     ),
    //     tap(() => this.isLoading = false),
    //     takeUntil(this.destroy$))
    //   .subscribe();
    // this.debouncer$.next();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  loadBooks() {
    this.isLoading = true;
    this.booksApiClient.getBooks(this.filter).subscribe(
      res => {
        this.books = res;
      }, error => {
        this.error = error;
      }, () => {
        this.isLoading = false;
      });
  }

  getFaIconForStock(inStock: boolean) {
    // BAAAD, very very bad! dont use it!
    console.log('getFaIconForStock');
    return inStock ? 'fa fa-check' : 'fa fa-times';
  }
}
