import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorbuttonComponent } from './colorbutton.component';

describe('ColorbuttonComponent', () => {
  let component: ColorbuttonComponent;
  let fixture: ComponentFixture<ColorbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
