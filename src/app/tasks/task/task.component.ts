import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Taskdata } from './task.model';
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


}
