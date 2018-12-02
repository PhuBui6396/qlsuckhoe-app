import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTintucComponent } from './update-tintuc.component';

describe('UpdateTintucComponent', () => {
  let component: UpdateTintucComponent;
  let fixture: ComponentFixture<UpdateTintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
