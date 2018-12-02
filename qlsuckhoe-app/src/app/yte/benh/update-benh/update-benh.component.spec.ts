import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBenhComponent } from './update-benh.component';

describe('UpdateBenhComponent', () => {
  let component: UpdateBenhComponent;
  let fixture: ComponentFixture<UpdateBenhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBenhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBenhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
