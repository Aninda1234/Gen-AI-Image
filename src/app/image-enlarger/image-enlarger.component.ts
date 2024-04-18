import { Component } from '@angular/core';
import { ImageProcessingService } from '../image-processing.service';

@Component({
  selector: 'app-image-enlarger',
  templateUrl: './image-enlarger.component.html',
  styleUrls: ['./image-enlarger.component.css']
})
export class ImageEnlargerComponent {
  imageFile: File | null = null;
  enlargedImageUrl: string = '';
  errorMessage: string = '';

  constructor(private imageProcessingService: ImageProcessingService) {}

  processImageEnlarger(): void {
    if (!this.imageFile) {
      this.errorMessage = 'Please upload an image file';
      return;
    }

    this.imageProcessingService.enlargeImage(this.imageFile).subscribe(response => {
      if (response && response.data && response.data.url) {
        this.enlargedImageUrl = response.data.url;
      } else {
        this.errorMessage = 'Error processing image: No enlarged image URL found in response';
      }
    }, error => {
      this.errorMessage = 'Error processing image: ' + error.message;
    });
  }

  handleFileInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.imageFile = target.files[0];
    }
  }
}
