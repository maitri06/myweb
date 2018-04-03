import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdoneComponent } from './prodone.component';

describe('ProdoneComponent', () => {
  let component: ProdoneComponent;
  let fixture: ComponentFixture<ProdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
