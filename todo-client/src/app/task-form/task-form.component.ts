/*import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

}
*/

/* import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const newTask = { name: this.taskName, completed: false };
    this.taskService.createTask(newTask).subscribe(() => {
      this.taskName = '';
    });
  }
}

*/


import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      completed: [false]
    });
  }

  ngOnInit(): void {}

  submitTask() {
    this.taskService.createTask(this.taskForm.value).subscribe(() => {
      this.taskForm.reset();
    });
  }
}



