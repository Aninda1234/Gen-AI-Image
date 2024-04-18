import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoToThreedSlowComponent } from './photo-to-threed-slow.component';

describe('PhotoToThreedSlowComponent', () => {
  let component: PhotoToThreedSlowComponent;
  let fixture: ComponentFixture<PhotoToThreedSlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoToThreedSlowComponent]
    });
    fixture = TestBed.createComponent(PhotoToThreedSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
