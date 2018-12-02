import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThuocComponent } from './add-thuoc.component';

describe('AddThuocComponent', () => {
  let component: AddThuocComponent;
  let fixture: ComponentFixture<AddThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
