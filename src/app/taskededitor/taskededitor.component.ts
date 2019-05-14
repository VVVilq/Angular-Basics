import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskededitor',
  templateUrl: './taskededitor.component.html',
  styleUrls: ['./taskededitor.component.css']
})
export class TaskededitorComponent implements OnInit {

  options : string[] = ['Option1','Option2','Option3'];
  categories : string[] = ['category1','category2','category3'];
  priorities: string[] = ["Not Important","Moderately Important","Important"];

  task:Task
  idForm:FormGroup;
  reactiveForm: FormGroup;
  id=0;
   

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(+this.route.snapshot.paramMap.get('id'))
    if(this.id!=0){
      console.log("if")
      this.createForm();
      this.getHero();
  
    }else{
      console.log("else")
      this.createForm();
      //console.log(this.id)
    }
    
  }

  createForm(){
    if(this.id!=0){
    this.idForm=new FormGroup({
      taskId:new FormControl(this.id,[Validators.required]),
    })
    }else{
      this.idForm=new FormGroup({
        taskId:new FormControl('',[Validators.required]),
      })
    }
    
  }

  createsecoundform(){
    this.reactiveForm=new FormGroup({
      id:new FormControl(parseInt(this.idForm.get("taskId").value)),
      order:new FormControl(this.task.order),
      state:new FormControl(this.task.state),
      name: new FormControl(this.task.name,[Validators.required,Validators.maxLength(512)]),
      description:new FormControl(this.task.description),
      type: new FormControl(this.task.type,[Validators.maxLength(512)]),
      tags: new FormControl(this.task.tags,Validators.maxLength(512)),
      category: new FormControl(this.task.category,[Validators.maxLength(512)]),
      createdDate:new FormControl({value: this.task.createdDate, disabled: true}),
      createdBy:new FormControl({value: this.task.createdBy, disabled:true}),
      modifiedDate: new FormControl(this.task.modifiedDate),
      modifiedBy: new FormControl(this.task.modifiedBy),
      deadlineStart: new FormControl(this.task.deadlineStart),
      deadlineEnd: new FormControl(this.task.deadlineEnd),
      priority: new FormControl(this.task.priority),
      expectedTime: new FormControl(this.task.expectedTime), 
      resources: new FormControl(this.task.resources)

    })
    console.log(this.task.order)

  }
  getHero(): void {
    const id = this.idForm.get('taskId').value
    this.taskService.getTask(id)
      .subscribe((task) => 
      {
        this.task = task
        this.createsecoundform();
      }
        );
    
  }

  save(): void {
    console.log(this.idForm.get("taskId").value)
    console.log(typeof(this.idForm.get("taskId").value))
    this.taskService.updateTask(<Task>this.reactiveForm.value).subscribe();
    
  }
}
