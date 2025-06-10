import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormSignup } from './template-driven-form-signup';

describe('TemplateDrivenFormSignup', () => {
  let component: TemplateDrivenFormSignup;
  let fixture: ComponentFixture<TemplateDrivenFormSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
