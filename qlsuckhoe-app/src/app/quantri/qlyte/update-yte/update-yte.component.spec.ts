import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateYteComponent } from './update-yte.component';

describe('UpdateYteComponent', () => {
  let component: UpdateYteComponent;
  let fixture: ComponentFixture<UpdateYteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateYteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateYteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
