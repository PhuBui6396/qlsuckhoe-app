import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCongtyComponent } from './update-congty.component';

describe('UpdateCongtyComponent', () => {
  let component: UpdateCongtyComponent;
  let fixture: ComponentFixture<UpdateCongtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCongtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCongtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
