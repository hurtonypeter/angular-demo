import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { BookListModel } from '../models/book-list.model';
import { BookDetailsModel } from '../models/book-details.model';
import { delay } from 'rxjs/operators';
import { listMock, detailsMocks } from './mock/fake-books-api-client.service';
import { HttpClient } from '@angular/common/http';
import { BookFilterModel } from '../models/book-filter.model';

const bookfilter = (filter: BookFilterModel) => {
  return (x: BookListModel): boolean => {
    return ((filter.title && x.title.toLowerCase().indexOf(filter.title.toLowerCase()) !== -1) || !filter.title)
        && ((filter.author && x.author.toLowerCase().indexOf(filter.author.toLowerCase()) !== -1) || !filter.author);
  };
};

@Injectable()
export class BooksApiClientService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(filter: BookFilterModel): Observable<BookListModel[]> {
    const obs = filter
      ? of(listMock.filter(bookfilter(filter)))
      : of(listMock);
    return obs.pipe(delay(500));
    // return throwError('vmi hiba');
  }

  getBookDetails(id: number): Observable<BookDetailsModel> {
    return this.http.get<BookDetailsModel>(`/books/${id}`);
  }
}
