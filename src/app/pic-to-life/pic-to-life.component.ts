import { Component } from '@angular/core';
import { ImageProcessingService } from '../image-processing.service'

@Component({
  selector: 'app-pic-to-life',
  templateUrl: './pic-to-life.component.html',
  styleUrls: ['./pic-to-life.component.css']
})
export class PicToLifeComponent {
  imageFile: File | null = null;
  choice: number = 1; // Default choice
  videoUrl: string = '';
  errorMessage: string = '';

  constructor(private imageProcessingService: ImageProcessingService) {}

  processPicToLife(): void {
    if (!this.imageFile) {
      this.errorMessage = 'Please upload an image file';
      return;
    }

    this.imageProcessingService.picToLife(this.imageFile, this.choice).subscribe(response => {
      if (response && response.data && response.data.video) {
        this.videoUrl = response.data.video;
      } else {
        this.errorMessage = 'Error processing image: No video found in response';
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
