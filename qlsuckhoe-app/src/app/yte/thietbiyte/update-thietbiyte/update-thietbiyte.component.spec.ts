import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThietbiyteComponent } from './update-thietbiyte.component';

describe('UpdateThietbiyteComponent', () => {
  let component: UpdateThietbiyteComponent;
  let fixture: ComponentFixture<UpdateThietbiyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateThietbiyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateThietbiyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
