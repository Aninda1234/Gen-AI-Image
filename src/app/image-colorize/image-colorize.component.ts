import { Component } from '@angular/core';
import { ImageProcessingService } from '../image-processing.service';

@Component({
  selector: 'app-image-colorize',
  templateUrl: './image-colorize.component.html',
  styleUrls: ['./image-colorize.component.css']
})
export class ImageColorizeComponent {
  imageFile: File | null = null;
  colorizedImageUrl: string = '';
  errorMessage: string = '';

  constructor(private imageProcessingService: ImageProcessingService) {}

  processImageColorize(): void {
    if (!this.imageFile) {
      this.errorMessage = 'Please upload an image file';
      return;
    }

    this.imageProcessingService.colorizeImage(this.imageFile).subscribe(response => {
      if (response && response.image) {
        this.colorizedImageUrl = 'data:image/jpeg;base64,' + response.image;
      } else {
        this.errorMessage = 'Error processing image: No colorized image found in response';
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
