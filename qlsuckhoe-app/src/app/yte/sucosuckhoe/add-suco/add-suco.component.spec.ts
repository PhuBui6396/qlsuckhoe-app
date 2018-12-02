import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSucoComponent } from './add-suco.component';

describe('AddSucoComponent', () => {
  let component: AddSucoComponent;
  let fixture: ComponentFixture<AddSucoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSucoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
