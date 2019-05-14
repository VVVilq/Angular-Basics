import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../task';
import { asap } from 'rxjs/internal/scheduler/asap';
import { DISABLED } from '@angular/forms/src/model';


@Component({
  selector: 'app-taskplanner',
  templateUrl: './taskplanner.component.html',
  styleUrls: ['./taskplanner.component.css']
})
export class TaskplannerComponent implements OnInit {

  options : string[] = ['Option1','Option2','Option3'];
  categories : string[] = ['category1','category2','category3'];
  priorities: string[] = ["Not Important","Moderately Important","Important"];
  reactiveForm:FormGroup;
  task:Task;
  date=new Date(2000,10,2)

  testowanie = {
    id: 13,
    name: 'xXx',
    description: 'programming mobile applications ',
    type: 'programming',
    tags: ['android','programming'],
    category: 'programming',
    createdDate: '11.12.2000',
    createdBy: 'Wilk Mateusz',
    modifiedDate: '11.12.2000',
    modifiedBy: 'Wilk Mateusz',
    deadlineStart: new Date(2001,11,12), deadlineEnd: new Date(2001,11,12), priority: 'Important', expectedTime: '11.12.2000', resources: 'dokumentacja'
  }

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.createForm();
    
  }

  createForm(){
    
    this.reactiveForm=new FormGroup({
      id:new FormControl(),
      order:new FormControl(),
      state:new FormControl('0'),
      name: new FormControl('',[Validators.required,Validators.maxLength(512)]),
      description:new FormControl(''),
      type: new FormControl('',[Validators.maxLength(512)]),
      tags: new FormControl('',Validators.maxLength(512)),
      category: new FormControl('',[Validators.maxLength(512)]),
      createdDate:new FormControl({value: '05.11.2018', disabled:true}),
      createdBy:new FormControl({value: 'Wilk Mateusz', disabled:true}),
      modifiedDate: new FormControl({value: '05.11.2018', disabled:true}),
      modifiedBy: new FormControl({value: 'Wilk Mateusz', disabled:true}),
      deadlineStart: new FormControl(''),
      deadlineEnd: new FormControl(''),
      priority: new FormControl(''),
      expectedTime: new FormControl(''), 
      resources: new FormControl('')

    })
  }

  onSubmit(){
    
    this.task=<Task>this.reactiveForm.value
    this.task.createdDate=this.reactiveForm.get('createdDate').value
    this.task.createdBy=this.reactiveForm.get('createdBy').value
    this.task.modifiedDate=this.reactiveForm.get('modifiedDate').value
    this.task.modifiedBy=this.reactiveForm.get('modifiedBy').value
    this.task.expectedTime=Number(this.reactiveForm.get('expectedTime').value)
    this.task.state=Number(this.reactiveForm.get('state').value)
    
    this.taskService.addTask(this.task).subscribe();
    
  }
  
  
  
}
