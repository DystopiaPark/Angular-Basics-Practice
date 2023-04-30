import { Component } from '@angular/core';

@Component({
  selector: 'app-colorbutton',
  templateUrl: './colorbutton.component.html',
  styleUrls: ['./colorbutton.component.css'],
})
export class ColorbuttonComponent {
  text = 'Hello world!';
  color: string = 'black';

  changeColor(newColor: string) {
    this.color = newColor;
  }
}
