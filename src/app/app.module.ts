import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { MatAutocompleteModule, MatSortModule,MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatTableModule,MatPaginatorModule,MatToolbarModule,MatCheckboxModule  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TagInputModule } from 'ngx-chips';

import { TaskplannerComponent } from './taskplanner/taskplanner.component';

import { CantorComponent } from './cantor/cantor.component';
import { TaskededitorComponent } from './taskededitor/taskededitor.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { TasksComponent } from './tasks/tasks.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { AutorComponent } from './autor/autor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CompareValidatorDirective,
    TaskplannerComponent,
    CantorComponent,
    TaskededitorComponent,
    TasksComponent,
    DragAndDropComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSortModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    TagInputModule,
    MatSelectModule,
    HttpClientModule,
    
    DragDropModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
