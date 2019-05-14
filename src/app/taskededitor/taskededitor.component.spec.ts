import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskededitorComponent } from './taskededitor.component';

describe('TaskededitorComponent', () => {
  let component: TaskededitorComponent;
  let fixture: ComponentFixture<TaskededitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskededitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskededitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
