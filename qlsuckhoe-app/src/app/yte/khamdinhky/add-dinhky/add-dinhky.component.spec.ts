import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDinhkyComponent } from './add-dinhky.component';

describe('AddDinhkyComponent', () => {
  let component: AddDinhkyComponent;
  let fixture: ComponentFixture<AddDinhkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDinhkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDinhkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
