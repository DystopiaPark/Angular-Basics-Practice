import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-formstorage-child',
  templateUrl: './formstorage-child.component.html',
  styleUrls: ['./formstorage-child.component.css']
})
export class FormstorageChildComponent {
  @Input() array: { name: string; surname: string; email: string; password: string }[] = [];
  @Output() deleted = new EventEmitter(); 
}