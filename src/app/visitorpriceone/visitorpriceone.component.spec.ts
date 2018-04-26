import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorpriceoneComponent } from './visitorpriceone.component';

describe('VisitorpriceoneComponent', () => {
  let component: VisitorpriceoneComponent;
  let fixture: ComponentFixture<VisitorpriceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorpriceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorpriceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
