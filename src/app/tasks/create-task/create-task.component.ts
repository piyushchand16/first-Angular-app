import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NTask } from './new-task.model';
import { TaskService } from '../tasks.service';

<<<<<<< HEAD
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css',
})
export class CreateTaskComponent {
  @Output() cancelEvent = new EventEmitter();
  @Input({ required: true }) userId!: string;

  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancelEvent() {
    this.cancelEvent.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );
=======

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Output() cancelEvent= new EventEmitter();
  @Input({required:true}) userId!:string;
 

  private taskService= inject(TaskService);

  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  
  onCancelEvent(){
    this.cancelEvent.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate,
    },this.userId)
>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff
    this.onCancelEvent();
  }
}
