import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThietbiyteComponent } from './add-thietbiyte.component';

describe('AddThietbiyteComponent', () => {
  let component: AddThietbiyteComponent;
  let fixture: ComponentFixture<AddThietbiyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThietbiyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThietbiyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
