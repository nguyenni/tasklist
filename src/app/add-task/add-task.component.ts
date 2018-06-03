import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent implements OnInit {

  private taskItem;
  private itemPriority;
  private deadline;

  constructor(private commonService: CommonService) { }

  addTask() {
    const created = new Date();
    const newTask = {
      name: this.taskItem,
      priority: this.itemPriority,
      deadline: this.deadline,
      created: created,
      isDone: false
    };

    this.commonService.addTask(newTask).subscribe(res => {
      this.commonService.add_subject.next();
    });

    this.taskItem = '';
    this.itemPriority = '';
    this.deadline = '';
  }

  ngOnInit() {
  }

}
