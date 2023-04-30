import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ColorbuttonComponent } from './colorbutton/colorbutton.component';
import { CounterComponent } from './counter/counter.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, ColorbuttonComponent, CounterComponent, InputComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent, ColorbuttonComponent],
})
export class AppModule {}
