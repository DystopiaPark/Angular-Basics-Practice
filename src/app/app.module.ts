import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ColorbuttonComponent } from './colorbutton/colorbutton.component';

@NgModule({
  declarations: [AppComponent, ColorbuttonComponent],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent, ColorbuttonComponent],
})
export class AppModule {}
