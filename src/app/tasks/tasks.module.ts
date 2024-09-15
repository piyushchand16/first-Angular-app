import { NgModule } from '@angular/core';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/card/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TaskComponent, TasksComponent, CreateTaskComponent],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TaskModule {}
