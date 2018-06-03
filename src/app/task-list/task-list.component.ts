import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Task } from '../add-task/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private taskList: Task[];
  selectedTask: Task;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.getAllTasks();
    this.commonService.add_subject.subscribe(res => {
      this.getAllTasks();
    });
  }


  // to edit a selected task
  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  // update task
  updateTask(task) {
    task.isDone = !task.isDone;
    const _task = {
      _id: task._id,
      name: task.name,
      priority: task.priority,
      deadline: task.deadline,
      created: task.created,
      isDone: task.isDone
    };

    this.commonService.updateTask(_task).subscribe(res => {
      this.getAllTasks();
    });
  }

  // delete task
  deleteTask(id) {
    this.commonService.deleteTask(id).subscribe(res => {
      this.getAllTasks();
    });
  }

  // remove completed (checked) tasks
  removeCompleted(taskList) {
    taskList.forEach((task) => {
      if (task.isDone) {
        this.deleteTask(task._id);
      }
    });
  }

  // gets all tasks and sorts them
  getAllTasks() {
    this.commonService.getTasks().subscribe(res => {
      this.taskList = res.json();

      // Sort the tasks (by date and priority) for display
      // https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
      this.taskList.sort(function(a, b) {
        if (a.priority > b.priority) {
          return -1;
        }
        if (a.priority < b.priority) {
          return 1;
        }
        return 0;
      }).sort(function(a, b) {
        const dateA = new Date(a.deadline.year, a.deadline.month, a.deadline.day);
        const dateB = new Date(b.deadline.year, b.deadline.month, b.deadline.day);
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
        return 0;
      });
    });
  }

}
