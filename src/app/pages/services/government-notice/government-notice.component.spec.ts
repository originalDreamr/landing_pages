import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentNoticeComponent } from './government-notice.component';

describe('GovernmentNoticeComponent', () => {
  let component: GovernmentNoticeComponent;
  let fixture: ComponentFixture<GovernmentNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
