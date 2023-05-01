import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../formstorage/formstorage.services';

@Component({
  selector: 'app-recievingcards',
  templateUrl: './recievingcards.component.html',
  styleUrls: ['./recievingcards.component.css'],
})
export class RecievingcardsComponent {
  constructor(public sharedService: SharedService) {}
  array: { name: string; surname: string; email: string; password: string }[] =
    [];
  onRemove(index: number) {
    this.array.splice(index, 1);
  }
}
