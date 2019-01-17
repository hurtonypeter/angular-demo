import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { BookListModel } from '../models/book-list.model';
import { BookDetailsModel } from '../models/book-details.model';
import { delay } from 'rxjs/operators';
import { listMock, detailsMocks } from './mock/fake-books-api-client.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksApiClientService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(filter: string): Observable<BookListModel[]> {
    const obs = filter
      ? of(listMock.filter(x => x.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1))
      : of(listMock);
    return obs.pipe(delay(500));
    // return throwError('vmi hiba');
  }

  getBookDetails(id: number): Observable<BookDetailsModel> {
    return this.http.get<BookDetailsModel>(`/books/${id}`);
  }
}
