import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTmpComponent } from './signup-tmp.component';

describe('SignupTmpComponent', () => {
  let component: SignupTmpComponent;
  let fixture: ComponentFixture<SignupTmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
