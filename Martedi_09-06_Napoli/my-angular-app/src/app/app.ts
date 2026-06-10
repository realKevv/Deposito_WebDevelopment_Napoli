import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card';
import { StudentList } from './components/student-list/student-list';
import { DirectivesComponent } from "./components/directives-component/directives-component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductCardComponent,
    StudentList,
    DirectivesComponent
],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-angular-app');
}
