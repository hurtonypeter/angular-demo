import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { BooksApiClientService } from '../clients/books-api-client.service';
import { BookListModel } from '../models/book-list.model';
import { Subject, fromEvent, forkJoin, merge as c_merge } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, filter, switchMap, map, catchError, tap, merge } from 'rxjs/operators';
import { BookFilterModel } from '../models/book-filter.model';

@Component({
  templateUrl: './book-list.page.component.html'
})
export class BookListPageComponent implements OnInit, OnDestroy, AfterViewInit {

  destroy$ = new Subject();
  debouncer$ = new Subject<string>();

  error: string | null = null;
  isLoading = true;
  filter: BookFilterModel = {};
  books: BookListModel[];

  @ViewChildren('filterField') filterFields: QueryList<ElementRef>;

  constructor(private booksApiClient: BooksApiClientService) { }

  ngAfterViewInit(): void {

    const fields = this.filterFields.map(f => f.nativeElement);

    fromEvent(fields, 'input')
      .pipe(takeUntil(this.destroy$))
      .subscribe(x => console.log('i'));


    // fromEvent(fields[0], 'input')
    //   .pipe(
    //     merge(fromEvent(fields[1], 'input')),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(x => console.log('merge'));


    // const o1 = fromEvent(fields[0], 'input');
    // const o2 = fromEvent(fields[1], 'input');
    // c_merge(o1, o2)
    //   .pipe(
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(x => console.log('forkjoin'));
  }

  ngOnInit() {
    this.loadBooks();
    this.debouncer$
      .pipe(
        filter((x: string) => (x && x.length > 1) || !x),
        debounceTime(500),
        distinctUntilChanged((x, y) => x === y),
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
