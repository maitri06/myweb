import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorcomboComponent } from './visitorcombo.component';

describe('VisitorcomboComponent', () => {
  let component: VisitorcomboComponent;
  let fixture: ComponentFixture<VisitorcomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorcomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
