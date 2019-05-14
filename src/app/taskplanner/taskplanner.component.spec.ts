import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskplannerComponent } from './taskplanner.component';

describe('TaskplannerComponent', () => {
  let component: TaskplannerComponent;
  let fixture: ComponentFixture<TaskplannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskplannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskplannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
