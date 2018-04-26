import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorprobrandComponent } from './visitorprobrand.component';

describe('VisitorprobrandComponent', () => {
  let component: VisitorprobrandComponent;
  let fixture: ComponentFixture<VisitorprobrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorprobrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorprobrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
