import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoaithuocComponent } from './update-loaithuoc.component';

describe('UpdateLoaithuocComponent', () => {
  let component: UpdateLoaithuocComponent;
  let fixture: ComponentFixture<UpdateLoaithuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLoaithuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoaithuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
