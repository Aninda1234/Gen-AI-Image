import { Component } from '@angular/core';
import { ImageProcessingService } from '../image-processing.service';

@Component({
  selector: 'app-photo-to-threed-slow',
  templateUrl: './photo-to-threed-slow.component.html',
  styleUrls: ['./photo-to-threed-slow.component.css']
})
export class PhotoToThreedSlowComponent {
  imageUrl: string = '';
  imageFile: File | null = null;
  slowMotionVideoUrl: string = '';
  errorMessage: string = '';

  constructor(private imageProcessingService: ImageProcessingService) {}

  processPhotoTo3dSlowMotion(): void {
    if (!this.imageUrl && !this.imageFile) {
      this.errorMessage = 'Please provide an image URL or upload an image file';
      return;
    }

    const imageInput = this.imageFile ? this.imageFile : this.imageUrl;
    
    this.imageProcessingService.photoTo3dSlowMotion(imageInput).subscribe(response => {
      if (response && response.data && response.data.video) {
        this.slowMotionVideoUrl = 'data:video/mp4;base64,' + response.data.video;
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
