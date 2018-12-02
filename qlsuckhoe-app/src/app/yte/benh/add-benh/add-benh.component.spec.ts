import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenhComponent } from './add-benh.component';

describe('AddBenhComponent', () => {
  let component: AddBenhComponent;
  let fixture: ComponentFixture<AddBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
