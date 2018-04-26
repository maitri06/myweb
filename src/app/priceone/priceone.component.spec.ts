import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceoneComponent } from './priceone.component';

describe('PriceoneComponent', () => {
  let component: PriceoneComponent;
  let fixture: ComponentFixture<PriceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
