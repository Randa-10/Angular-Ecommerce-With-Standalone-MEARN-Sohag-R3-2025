import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParent } from './product-parent';

describe('ProductParent', () => {
  let component: ProductParent;
  let fixture: ComponentFixture<ProductParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
