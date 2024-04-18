import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEnlargerComponent } from './image-enlarger.component';

describe('ImageEnlargerComponent', () => {
  let component: ImageEnlargerComponent;
  let fixture: ComponentFixture<ImageEnlargerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageEnlargerComponent]
    });
    fixture = TestBed.createComponent(ImageEnlargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
