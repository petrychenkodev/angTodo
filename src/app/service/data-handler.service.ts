import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestData } from '../data/TestData';
import { Task } from '../model/Task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new Subject<Task[]>();

  constructor() { }

  public getCategories(): Category[] {
    return TestData.categories;
  }

  public fillTasks() {
    this.taskSubject.next(TestData.tasks);
  }

  public fillTasksByCategory(category: Category) {
    const task = TestData.tasks.filter(el => el.category === category );
    this.taskSubject.next(task);

  }
}
