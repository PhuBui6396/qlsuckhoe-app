import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThietbiyteComponent } from './thietbiyte.component';

describe('ThietbiyteComponent', () => {
  let component: ThietbiyteComponent;
  let fixture: ComponentFixture<ThietbiyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThietbiyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThietbiyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
