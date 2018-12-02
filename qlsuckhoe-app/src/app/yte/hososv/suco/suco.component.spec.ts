import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucoComponent } from './suco.component';

describe('SucoComponent', () => {
  let component: SucoComponent;
  let fixture: ComponentFixture<SucoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
