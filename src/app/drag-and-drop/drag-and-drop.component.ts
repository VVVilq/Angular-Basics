import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { TasksComponent } from '../tasks/tasks.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface TaskToDo {
  task: Task;
  order: number;
  state: number;
}

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})



export class DragAndDropComponent implements OnInit {



  tasksToDo: Task[];
  iterator = 1;


  taskDone: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasksToDo = [];
    this.taskDone = [];
    this.getHeroes();

  }



  getHeroes(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        for (let element of tasks) {
          if (element.state == 0) {
            this.tasksToDo.push(element);
          } else {
            this.taskDone.push(element);
          }

        }
        this.tasksToDo.sort(function (a, b) { return a.order - b.order; })
        this.taskDone.sort(function (a, b) { return a.order - b.order; })
      });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("iff")
      let i = 1;
      for (let element of event.container.data) {
        element.order = i
        this.save(element);
        i++;
      }
    } else {
      console.log("eelse")
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      let i = 1;
      for (let element of event.container.data) {
        element.order = i
        this.save(element);
        i++;

      }
      i = 1;
      for (let element of event.previousContainer.data) {
        element.order = i

        this.save(element);
        i++;
      }
      let element = event.container.data[event.currentIndex];
      if (element.state == 0) {
        element.state = 1
      } else {
        element.state = 0
      }
      this.save(element);
      console.log(event.container.data[event.currentIndex].state)

    }
  }

  save(task: Task): void {

    this.taskService.updateTask(task).subscribe();

  }

}

