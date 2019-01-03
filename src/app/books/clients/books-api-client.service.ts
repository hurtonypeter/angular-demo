import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookListModel } from '../models/book-list.model';
import { BookDetailsModel } from '../models/book-details.model';

const listMock: BookListModel[] = [
  { id: 1, author: 'J. K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone', inStock: true, rating: 4.7 },
  { id: 2, author: 'J. K. Rowling', title: 'Harry Potter and the Chamber of Secrets', inStock: false, rating: 4.2 }
];
const detailsMocks: BookDetailsModel[] =
  listMock.map((x: BookListModel): BookDetailsModel => ({
    ...x,
    barcode: Math.floor(Math.random() * 9900000) + 1000000,
    shelf: `Row: ${Math.floor(Math.random() * 10)}, Shelf: ${Math.floor(Math.random() * 10)}`
  }));

@Injectable()
export class BooksApiClientService {

  constructor() { console.log('BooksApiClientService created!'); }

  getBooks(): Observable<BookListModel[]> {
    return of(listMock);
  }

  getBookDetails(id: number): Observable<BookDetailsModel> {
    return of(detailsMocks.find(x => x.id === id));
  }
}
