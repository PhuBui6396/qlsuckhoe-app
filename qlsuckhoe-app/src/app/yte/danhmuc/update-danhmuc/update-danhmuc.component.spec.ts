import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDanhmucComponent } from './update-danhmuc.component';

describe('UpdateDanhmucComponent', () => {
  let component: UpdateDanhmucComponent;
  let fixture: ComponentFixture<UpdateDanhmucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDanhmucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDanhmucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
