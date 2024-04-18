import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicToLifeComponent } from './pic-to-life.component';

describe('PicToLifeComponent', () => {
  let component: PicToLifeComponent;
  let fixture: ComponentFixture<PicToLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicToLifeComponent]
    });
    fixture = TestBed.createComponent(PicToLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
