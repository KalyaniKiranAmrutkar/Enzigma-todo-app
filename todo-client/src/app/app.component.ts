//import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA,Component,input,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'todo-client';
}
