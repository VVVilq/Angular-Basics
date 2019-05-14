import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskplannerComponent } from './taskplanner/taskplanner.component';
import {CantorComponent} from './cantor/cantor.component';
import {TaskededitorComponent} from './taskededitor/taskededitor.component';
import {TasksComponent} from './tasks/tasks.component';
import {DragAndDropComponent} from './drag-and-drop/drag-and-drop.component';
import {AutorComponent} from './autor/autor.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'planer',component: TaskplannerComponent},
  {path:'cantor',component: CantorComponent},
  {path:'editor',component: TaskededitorComponent},
  {path:'teditor/:id',component: TaskededitorComponent},
  {path:'tasks',component: TasksComponent},
  {path:'dragndrop',component: DragAndDropComponent},
  {path:'autor',component: AutorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
