import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievingcardsComponent } from './recievingcards.component';

describe('RecievingcardsComponent', () => {
  let component: RecievingcardsComponent;
  let fixture: ComponentFixture<RecievingcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievingcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecievingcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
