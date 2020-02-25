import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHelperComponent } from './ng-helper.component';

describe('NgHelperComponent', () => {
  let component: NgHelperComponent;
  let fixture: ComponentFixture<NgHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
