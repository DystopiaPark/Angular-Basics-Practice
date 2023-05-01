import { Component } from '@angular/core';

@Component({
  selector: 'app-colorbuttontext',
  templateUrl: './colorbuttontext.component.html',
  styleUrls: ['./colorbuttontext.component.css'],
})
export class ColorbuttontextComponent {
  messages: string[] = ['Hello world!', 'Hello sturd!', 'Hello goord!'];
  color: string = 'black';
  currentMessage: string = 'The text will appear here';

  changeColorAndText(newColor: string, text: string) {
    this.color = newColor;
    this.currentMessage = text;
  }
}
