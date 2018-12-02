import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSucoComponent } from './update-suco.component';

describe('UpdateSucoComponent', () => {
  let component: UpdateSucoComponent;
  let fixture: ComponentFixture<UpdateSucoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSucoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
