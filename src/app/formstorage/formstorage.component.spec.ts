import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstorageComponent } from './formstorage.component';

describe('FormstorageComponent', () => {
  let component: FormstorageComponent;
  let fixture: ComponentFixture<FormstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
