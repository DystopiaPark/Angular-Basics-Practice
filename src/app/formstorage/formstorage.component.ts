import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formstorage',
  templateUrl: './formstorage.component.html',
  styleUrls: ['./formstorage.component.css'],
})
export class FormstorageComponent {
  array: { name: string; surname: string; email: string; password: string }[] =
    [{name: "Quackers", surname: "Brackers", email: "at@gmail.com", password: "blablabla"}];

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('surnameInput') surnameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  onSubmit() {
    this.array.push({
      name: this.nameInput.nativeElement.value,
      surname: this.surnameInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
      password: this.passwordInput.nativeElement.value,
    });
    this.nameInput.nativeElement.value = '';
    this.surnameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.passwordInput.nativeElement.value = '';
    console.log(this.array);
  }

  onRemove(index: number) {
    this.array.splice(index, 1);
  }
}
