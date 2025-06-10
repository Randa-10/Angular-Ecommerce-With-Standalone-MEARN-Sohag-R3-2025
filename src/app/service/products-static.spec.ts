import { TestBed } from '@angular/core/testing';

import { ProductsStatic } from './products-static';

describe('ProductsStatic', () => {
  let service: ProductsStatic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsStatic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
