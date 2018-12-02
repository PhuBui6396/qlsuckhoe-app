import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTintucComponent } from './upload-tintuc.component';

describe('UploadTintucComponent', () => {
  let component: UploadTintucComponent;
  let fixture: ComponentFixture<UploadTintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
