import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucosuckhoeComponent } from './sucosuckhoe.component';

describe('SucosuckhoeComponent', () => {
  let component: SucosuckhoeComponent;
  let fixture: ComponentFixture<SucosuckhoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucosuckhoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucosuckhoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
