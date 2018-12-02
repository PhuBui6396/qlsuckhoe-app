import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYteComponent } from './add-yte.component';

describe('AddYteComponent', () => {
  let component: AddYteComponent;
  let fixture: ComponentFixture<AddYteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
