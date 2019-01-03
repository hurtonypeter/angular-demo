import { TestBed } from '@angular/core/testing';

import { BooksApiClientService } from './books-api-client.service';

describe('BooksApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksApiClientService = TestBed.get(BooksApiClientService);
    expect(service).toBeTruthy();
  });
});
