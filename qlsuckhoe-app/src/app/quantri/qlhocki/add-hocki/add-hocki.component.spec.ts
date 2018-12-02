import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHockiComponent } from './add-hocki.component';

describe('AddHockiComponent', () => {
  let component: AddHockiComponent;
  let fixture: ComponentFixture<AddHockiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHockiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHockiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
