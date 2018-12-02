import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsinhvienComponent } from './qlsinhvien.component';
describe('QlsinhvienComponent', () => {
  let component: QlsinhvienComponent;
  let fixture: ComponentFixture<QlsinhvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlsinhvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlsinhvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
