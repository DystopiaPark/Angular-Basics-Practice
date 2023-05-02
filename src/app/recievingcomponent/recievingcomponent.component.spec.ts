import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievingcomponentComponent } from './recievingcomponent.component';

describe('RecievingcomponentComponent', () => {
  let component: RecievingcomponentComponent;
  let fixture: ComponentFixture<RecievingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievingcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecievingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
