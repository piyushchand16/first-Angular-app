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
