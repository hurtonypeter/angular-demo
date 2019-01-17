import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { BookListModel } from '../../models/book-list.model';
import { BookDetailsModel } from '../../models/book-details.model';

export const listMock: BookListModel[] = [
    { id: 1, author: 'J. K. Rowling', title: 'Harry Potter and the Philosopher\'s Stone', inStock: true, rating: 4.7 },
    { id: 2, author: 'J. K. Rowling', title: 'Harry Potter and the Chamber of Secrets', inStock: false, rating: 4.2 },
    { id: 3, author: 'J. R. R. Tolkien', title: 'Beowulf', inStock: true, rating: 3.9 },
    { id: 4, author: 'J. R. R. Tolkien', title: 'The Silmarillion', inStock: true, rating: 4.1 },
    { id: 5, author: 'J. R. R. Tolkien', title: 'The Children of Húrin', inStock: false, rating: 5 }
];
export const detailsMocks: BookDetailsModel[] =
    listMock.map((x: BookListModel): BookDetailsModel => ({
        ...x,
        barcode: Math.floor(Math.random() * 9900000) + 1000000,
        shelf: `Row: ${Math.floor(Math.random() * 10)}, Shelf: ${Math.floor(Math.random() * 10)}`
    }));

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        return of(null).pipe(
            mergeMap(() => {
                if (request.url.match(/\/books\/\d+$/) && request.method === 'GET') {
                    const urlParts = request.url.split('/');
                    const id = parseInt(urlParts[urlParts.length - 1], 10);
                    const book = detailsMocks.find(x => x.id === id);
                    if (book) {
                        return of(new HttpResponse({
                            status: 200,
                            body: book
                        }));
                    } else {
                        return throwError({ error: { message: 'Not found' } });
                    }
                }

                // pass through any requests not handled above
                return next.handle(request);
            })
        )
            // call materialize and dematerialize to ensure delay
            // even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

    }
}
