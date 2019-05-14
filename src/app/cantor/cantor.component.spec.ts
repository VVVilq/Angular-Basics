import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantorComponent } from './cantor.component';

describe('CantorComponent', () => {
  let component: CantorComponent;
  let fixture: ComponentFixture<CantorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
