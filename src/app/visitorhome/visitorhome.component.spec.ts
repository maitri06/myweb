import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorhomeComponent } from './visitorhome.component';

describe('VisitorhomeComponent', () => {
  let component: VisitorhomeComponent;
  let fixture: ComponentFixture<VisitorhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
