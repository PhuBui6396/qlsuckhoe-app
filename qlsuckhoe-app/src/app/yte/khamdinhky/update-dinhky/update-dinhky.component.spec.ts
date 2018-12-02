import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDinhkyComponent } from './update-dinhky.component';

describe('UpdateDinhkyComponent', () => {
  let component: UpdateDinhkyComponent;
  let fixture: ComponentFixture<UpdateDinhkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDinhkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDinhkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
