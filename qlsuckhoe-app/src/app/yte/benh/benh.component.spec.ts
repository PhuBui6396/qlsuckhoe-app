import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenhComponent } from './benh.component';

describe('BenhComponent', () => {
  let component: BenhComponent;
  let fixture: ComponentFixture<BenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
