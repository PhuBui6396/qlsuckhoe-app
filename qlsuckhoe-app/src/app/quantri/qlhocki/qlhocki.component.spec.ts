import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhockiComponent } from './qlhocki.component';

describe('QlhockiComponent', () => {
  let component: QlhockiComponent;
  let fixture: ComponentFixture<QlhockiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlhockiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlhockiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
