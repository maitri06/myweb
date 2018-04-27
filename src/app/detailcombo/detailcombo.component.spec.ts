import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcomboComponent } from './detailcombo.component';

describe('DetailcomboComponent', () => {
  let component: DetailcomboComponent;
  let fixture: ComponentFixture<DetailcomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
