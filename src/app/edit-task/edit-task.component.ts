import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../add-task/task.model';
import { CommonService } from '../common.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private commonService: CommonService, private taskListComponent: TaskListComponent) { }

  ngOnInit() {
  }

  // update task when the save button is clicked
  updateTask(task) {
    const _task = {
      _id: task._id,
      name: task.name,
      priority: task.priority,
      deadline: task.deadline,
      created: task.created,
      isDone: task.isDone
    };

    this.commonService.updateTask(_task).subscribe(res => {
      this.taskListComponent.getAllTasks();
    });
  }

}
