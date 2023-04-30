import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Counter app';
  name = 'Filip';
  inputName = '';
  counter = 0;
  inputNameTwo = '';

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}

// template: `
//   <h1>Counter App</h1>
//   <input [(ngModel)]="name" placeholder="Enter your name" />
//   <button (click)="increment()">Increment</button>
//   <p>Counter value: {{ counter }}</p>
//   <p>Hello, {{ name }}!</p>
// `,
