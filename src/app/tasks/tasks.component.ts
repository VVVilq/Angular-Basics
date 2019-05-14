import { Component, OnInit,ViewChild } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import {MatPaginator, MatTableDataSource,MatSort} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

 

displayedColumns: string[] = ['select','id', 'name',  'type','category','createdDate','createdBy','expectedTime','deadlineStart','deadlineEnd','priority'," "];
 
  tasks: Task[];
  dataSource: MatTableDataSource<Task>;
  selection = new SelectionModel<Task>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getHeroes();
    
  }

  getHeroes(): void {
    this.taskService.getTasks()
    .subscribe(tasks => {this.tasks = tasks; this.setValues()});
  }

  setValues(){
    this.dataSource = new MatTableDataSource<Task>(this.tasks);
    setTimeout(() => {this.dataSource.paginator = this.paginator;this.dataSource.sort = this.sort;})
    
  }

  getTotalTime() {
    return this.tasks.map(t => t.expectedTime).reduce((acc, value) => acc + value, 0);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
      
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  delete(task: Task) {
    if( confirm("Czy na pewno chcesz usunąć wybrany element?") ) {
      this.dataSource.data = this.dataSource.data.filter(f => f !== task);
        this.taskService.deleteTask(task).subscribe();
    }
    }
  

  
}
