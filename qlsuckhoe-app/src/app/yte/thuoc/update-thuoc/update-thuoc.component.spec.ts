import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThuocComponent } from './update-thuoc.component';

describe('UpdateThuocComponent', () => {
  let component: UpdateThuocComponent;
  let fixture: ComponentFixture<UpdateThuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateThuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
