import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHockiComponent } from './update-hocki.component';

describe('UpdateHockiComponent', () => {
  let component: UpdateHockiComponent;
  let fixture: ComponentFixture<UpdateHockiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHockiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHockiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
