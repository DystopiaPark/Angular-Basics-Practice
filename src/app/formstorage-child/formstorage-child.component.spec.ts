import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstorageChildComponent } from './formstorage-child.component';

describe('FormstorageChildComponent', () => {
  let component: FormstorageChildComponent;
  let fixture: ComponentFixture<FormstorageChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstorageChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormstorageChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
