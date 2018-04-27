import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtproductComponent } from './detailtproduct.component';

describe('DetailtproductComponent', () => {
  let component: DetailtproductComponent;
  let fixture: ComponentFixture<DetailtproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailtproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
