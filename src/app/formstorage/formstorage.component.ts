import { Component } from '@angular/core';

@Component({
  selector: 'app-formstorage',
  templateUrl: './formstorage.component.html',
  styleUrls: ['./formstorage.component.css'],
})
export class FormstorageComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {}
}
