import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMicroMotionComponent } from './image-micro-motion.component';

describe('ImageMicroMotionComponent', () => {
  let component: ImageMicroMotionComponent;
  let fixture: ComponentFixture<ImageMicroMotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageMicroMotionComponent]
    });
    fixture = TestBed.createComponent(ImageMicroMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
