import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { type NTask } from './create-task/new-task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userid!:string;
  @Input({required:true}) name!:string;
  createTask=false;
  // private taskService:TaskService;

  // private taskService =new TaskService(); it is not used because everytime it will create new object and hence the change will not be reflected.
  constructor(private taskService:TaskService){
    // this.taskService=taskService;
  }

  get selectedTasks(){
    return this.taskService.getUserTasks(this.userid);
  }

  onCompletedTask(id:string){
    this.taskService.remove(id);
  }

  onAddTask(){
    this.createTask=true;
  }

  onCancelTask(){
    this.createTask=false;
  }
}
