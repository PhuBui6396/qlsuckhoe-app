import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCongtyComponent } from './add-congty.component';

describe('AddCongtyComponent', () => {
  let component: AddCongtyComponent;
  let fixture: ComponentFixture<AddCongtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCongtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCongtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
