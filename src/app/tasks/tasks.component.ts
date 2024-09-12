import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';

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
  createTask!:boolean;
  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedTasks(){
    return this.dummyTasks.filter((task)=> task.userId===this.userid)
  }

  onCompletedTask(id:string){
    this.dummyTasks=this.dummyTasks.filter((task)=>task.id!==id);
  }

  onAddTask(){
    this.createTask=true;
  }
}
