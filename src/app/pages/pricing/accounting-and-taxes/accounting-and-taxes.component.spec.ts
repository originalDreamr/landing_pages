import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingAndTaxesComponent } from './accounting-and-taxes.component';

describe('AccountingAndTaxesComponent', () => {
  let component: AccountingAndTaxesComponent;
  let fixture: ComponentFixture<AccountingAndTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingAndTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingAndTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
