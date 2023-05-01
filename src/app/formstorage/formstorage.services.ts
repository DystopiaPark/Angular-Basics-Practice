import { ElementRef, Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  array: { name: string; surname: string; email: string; password: string }[] =
    [];

  onRemove(index: number) {
    this.array.splice(index, 1);
  }
}
