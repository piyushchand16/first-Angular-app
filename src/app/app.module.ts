<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/card/shared.module';
import { TaskModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TaskModule],
})
export class AppModule {}
=======
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,HeaderComponent,TasksComponent,UserComponent]
})
export class AppModule{

}

>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff
