import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {
  private rapidApiKey = environment.rapidApiKey; // Replace 'xxx' with your RapidAPI key
  private rapidApiHost = 'photo-to-3d-slow-motion.p.rapidapi.com'; // Replace with your RapidAPI host
  private apiUrl = 'https://photo-to-3d-slow-motion.p.rapidapi.com/huoshan/facebody/dollyzoom';

  constructor(private http: HttpClient) { }

  photoTo3dSlowMotion(imageInput: string | File): Observable<any> {
    const formData = new FormData();
    if (typeof imageInput === 'string') {
      formData.append('image_target', imageInput);
    } else {
      formData.append('image_target', imageInput, imageInput.name);
    }

    const options = {
      headers: {
        'X-RapidAPI-Key': this.rapidApiKey,
        'X-RapidAPI-Host': this.rapidApiHost
      },
      data: formData
    };

    return this.http.post<any>(this.apiUrl, formData, options);
  }

  // Function to perform image micro motion
  imageMicroMotion(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image_target', imageFile);
    formData.append('operation', '11');

    const options = {
      headers: {
        'X-RapidAPI-Key': this.rapidApiKey,
        'X-RapidAPI-Host': this.rapidApiHost
      },
      data: formData
    };

    return this.http.post<any>(this.apiUrl, formData, options);
  }

  // Function to enlarge an image
  enlargeImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    const options = {
      headers: {
        'X-RapidAPI-Key': this.rapidApiKey,
        'X-RapidAPI-Host': this.rapidApiHost
      },
      data: formData
    };

    return this.http.post<any>(this.apiUrl, formData, options);
  }

  // Function to colorize an image
  colorizeImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    const options = {
      headers: {
        'X-RapidAPI-Key': this.rapidApiKey,
        'X-RapidAPI-Host': this.rapidApiHost
      },
      data: formData
    };

    return this.http.post<any>(this.apiUrl, formData, options);
  }

  // Add more functions for other image processing functionalities as needed
}

