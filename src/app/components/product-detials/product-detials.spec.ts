import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetials } from './product-detials';

describe('ProductDetials', () => {
  let component: ProductDetials;
  let fixture: ComponentFixture<ProductDetials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
