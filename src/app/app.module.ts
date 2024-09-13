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

