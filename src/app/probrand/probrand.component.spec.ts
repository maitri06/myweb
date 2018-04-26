import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbrandComponent } from './probrand.component';

describe('ProbrandComponent', () => {
  let component: ProbrandComponent;
  let fixture: ComponentFixture<ProbrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
