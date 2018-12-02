import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaithuocComponent } from './loaithuoc.component';

describe('LoaithuocComponent', () => {
  let component: LoaithuocComponent;
  let fixture: ComponentFixture<LoaithuocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaithuocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaithuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
