import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HososvComponent } from './hososv.component';

describe('HososvComponent', () => {
  let component: HososvComponent;
  let fixture: ComponentFixture<HososvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HososvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HososvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
