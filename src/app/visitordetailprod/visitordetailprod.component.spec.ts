import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordetailprodComponent } from './visitordetailprod.component';

describe('VisitordetailprodComponent', () => {
  let component: VisitordetailprodComponent;
  let fixture: ComponentFixture<VisitordetailprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordetailprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordetailprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
