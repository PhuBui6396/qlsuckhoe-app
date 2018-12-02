import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhamdinhkyComponent } from './khamdinhky.component';

describe('KhamdinhkyComponent', () => {
  let component: KhamdinhkyComponent;
  let fixture: ComponentFixture<KhamdinhkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhamdinhkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhamdinhkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
