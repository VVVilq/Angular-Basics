import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service'; 
import { Task } from '../task';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private heroesUrl = 'api/tasks'
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


    getTasks (): Observable<Task[]> {
      return this.http.get<Task[]>(this.heroesUrl).pipe(
        tap(_ => this.log('fetched tasks')),
        catchError(this.handleError('getTasks', []))
      );
    }

    getTask(id: number): Observable<Task> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Task>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Task>(`getHero id=${id}`))
      );
    }
    updateTask (task: Task): Observable<any> {
      return this.http.put(this.heroesUrl, task, httpOptions).pipe(
        tap(_ => this.log(`updated task id=${task.id}`)),
        catchError(this.handleError<any>('updateTask'))
      );
    }

    addTask (task: Task): Observable<Task> {
      return this.http.post<Task>(this.heroesUrl, task, httpOptions).pipe(
        tap((task: Task) =>{task.order=task.id; this.log(`added task w/ id=${task.id}`)}),
        catchError(this.handleError<Task>('addTask'))
      );
    }

    deleteTask (task: Task | number): Observable<Task> {
      const id = typeof task === 'number' ? task : task.id;
      const url = `${this.heroesUrl}/${id}`;
  
      return this.http.delete<Task>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted task id=${id}`)),
        catchError(this.handleError<Task>('deleteForm'))
      );
    }
  
    
    

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }


}
