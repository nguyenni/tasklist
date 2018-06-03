import { Injectable } from '@angular/core';
import { Task } from './add-task/task.model';
import { Subject } from 'rxjs';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public taskList: Task[];
  public add_subject = new Subject<String>();

  constructor(private http: Http) {
    this.taskList = [];
  }

  addTask(task) {
    return this.http.post('/api/task', task);
  }

  updateTask(task) {
    return this.http.put('/api/task/' + task._id, task);
  }

  deleteTask(id) {
    return this.http.delete('api/task/' + id);
  }

  getTasks() {
    return this.http.get('/api/tasks');
  }
}
