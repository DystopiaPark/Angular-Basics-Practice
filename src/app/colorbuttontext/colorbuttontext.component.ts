import { Component } from '@angular/core';

@Component({
  selector: 'app-colorbuttontext',
  templateUrl: './colorbuttontext.component.html',
  styleUrls: ['./colorbuttontext.component.css'],
})
export class ColorbuttontextComponent {
  messages: string[] = ['Hello world!', 'Hello sturd!', 'Hello goord!'];
  color: string = 'black';

  currentMessage: string = this.messages[0];

  changeMessage(index: number) {
    if (index > 3) {
    }
    this.currentMessage == this.messages[index];
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }
}
