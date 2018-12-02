import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhkyComponent } from './dinhky.component';

describe('DinhkyComponent', () => {
  let component: DinhkyComponent;
  let fixture: ComponentFixture<DinhkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinhkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
