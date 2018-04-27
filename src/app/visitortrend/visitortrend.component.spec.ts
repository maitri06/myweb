import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitortrendComponent } from './visitortrend.component';

describe('VisitortrendComponent', () => {
  let component: VisitortrendComponent;
  let fixture: ComponentFixture<VisitortrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitortrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitortrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
