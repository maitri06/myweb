import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorcombodetailComponent } from './visitorcombodetail.component';

describe('VisitorcombodetailComponent', () => {
  let component: VisitorcombodetailComponent;
  let fixture: ComponentFixture<VisitorcombodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorcombodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorcombodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
