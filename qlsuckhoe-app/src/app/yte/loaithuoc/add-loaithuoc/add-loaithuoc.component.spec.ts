import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoaithuocComponent } from './add-loaithuoc.component';

describe('AddLoaithuocComponent', () => {
  let component: AddLoaithuocComponent;
  let fixture: ComponentFixture<AddLoaithuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoaithuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoaithuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
