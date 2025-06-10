import { TestBed } from '@angular/core/testing';

import { ProductsWitApi } from './products-wit-api';

describe('ProductsWitApi', () => {
  let service: ProductsWitApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsWitApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
