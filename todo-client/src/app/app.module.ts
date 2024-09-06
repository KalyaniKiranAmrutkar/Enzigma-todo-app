
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';  // Import TaskFormComponent
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent  // Declare TaskFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    FormsModule // Import ReactiveFormsModule for the form
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }

