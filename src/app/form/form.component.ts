import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  password: string = '';

  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('surnameInput') surnameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  onSubmit() {
    this.name = this.nameInput.nativeElement.value;
    this.surname = this.surnameInput.nativeElement.value;
    this.email = this.emailInput.nativeElement.value;
    this.password = this.passwordInput.nativeElement.value;
    this.nameInput.nativeElement.value = '';
    this.surnameInput.nativeElement.value = '';
    this.emailInput.nativeElement.value = '';
    this.passwordInput.nativeElement.value = '';
  }
}
