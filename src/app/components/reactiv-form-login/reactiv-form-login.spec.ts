import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivFormLogin } from './reactiv-form-login';

describe('ReactivFormLogin', () => {
  let component: ReactivFormLogin;
  let fixture: ComponentFixture<ReactivFormLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivFormLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivFormLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
