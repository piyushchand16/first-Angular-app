import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Taskdata } from './task.model';
<<<<<<< HEAD
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) taskdata!: Taskdata;

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.remove(this.taskdata.id);
  }
=======
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) taskdata!:Taskdata;

  private taskService=inject(TaskService)


  onCompleteTask(){
    this.taskService.remove(this.taskdata.id);
  }


>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff
}
