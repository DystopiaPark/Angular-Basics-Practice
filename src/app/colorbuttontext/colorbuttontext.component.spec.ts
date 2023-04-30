import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorbuttontextComponent } from './colorbuttontext.component';

describe('ColorbuttontextComponent', () => {
  let component: ColorbuttontextComponent;
  let fixture: ComponentFixture<ColorbuttontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorbuttontextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorbuttontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
