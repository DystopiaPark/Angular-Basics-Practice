import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingcomponentComponent } from './sendingcomponent.component';

describe('SendingcomponentComponent', () => {
  let component: SendingcomponentComponent;
  let fixture: ComponentFixture<SendingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
