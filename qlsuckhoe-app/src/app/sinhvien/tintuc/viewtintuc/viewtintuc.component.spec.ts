import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtintucComponent } from './viewtintuc.component';

describe('ViewtintucComponent', () => {
  let component: ViewtintucComponent;
  let fixture: ComponentFixture<ViewtintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
