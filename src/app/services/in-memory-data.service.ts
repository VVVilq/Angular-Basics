import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../task';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const tasks = [
      {
        id: 1,
        order: 1,
        state: 0,
        name: 'Angular',
        description: 'learning frontend technologies',
        type: 'programing',
        tags: ['UI','programming'],
        category: 'programming',
        createdDate: '11.12.2000',
        createdBy: 'Wilk Mateusz',
        modifiedDate:'11.12.2000',
        modifiedBy: 'Wilk Mateusz',
        deadlineStart: new Date(2000,11,12), deadlineEnd: new Date(2000,11,12), priority: 'Important', expectedTime: 48, resources: 'dokumentacja'
      },

      {
        id: 2,
        order: 2,
        state: 0,
        name: 'ReactNative',
        description: 'programming mobile applications ',
        type: 'programming',
        tags: ['android','programming'],
        category: 'programming',
        createdDate: '11.12.2000',
        createdBy: 'Wilk Mateusz',
        modifiedDate: '11.12.2000',
        modifiedBy: 'Wilk Mateusz',
        deadlineStart: new Date(2001,11,12), deadlineEnd: new Date(2001,11,12), priority: 'Important', expectedTime: 48, resources: 'dokumentacja'
      },

      {
        id: 3,
        order: 3,
        state: 0,
        name: 'Java',
        description: 'learning leading programming language ',
        type: 'programming',
        tags: ['java','programming'],
        category: 'programming',
        createdDate: '11.12.2000',
        createdBy: 'Wilk Mateusz',
        modifiedDate: '11.12.2000',
        modifiedBy: 'Wilk Mateusz',
        deadlineStart: new Date(2001,11,12), deadlineEnd: new Date(2001,11,12), priority: 'Important', expectedTime: 72, resources: 'dokumentacja'
      },

      {
        id: 4,
        order: 4,
        state: 0,
        name: 'Artificial Inteligence',
        description: 'learning about AI ',
        type: 'programming',
        tags: ['AI','programming'],
        category: 'programming',
        createdDate: '11.12.2000',
        createdBy: 'Wilk Mateusz',
        modifiedDate: '11.12.2000',
        modifiedBy: 'Wilk Mateusz',
        deadlineStart: new Date(2001,11,12), deadlineEnd: new Date(2001,11,12), priority: 'Important', expectedTime: 72, resources: 'dokumentacja'
      }

    ];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  }


}
