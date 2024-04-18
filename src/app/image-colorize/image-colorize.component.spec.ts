import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageColorizeComponent } from './image-colorize.component';

describe('ImageColorizeComponent', () => {
  let component: ImageColorizeComponent;
  let fixture: ComponentFixture<ImageColorizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageColorizeComponent]
    });
    fixture = TestBed.createComponent(ImageColorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
