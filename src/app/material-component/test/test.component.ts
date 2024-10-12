import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title: string = 'Object Detection';
  imageUrl: string | ArrayBuffer | null = null;
  detectedImageUrl: string | ArrayBuffer | null = null;
  constructor(private http: HttpClient) { }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
  }

  detectObjects(imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile);
    return this.http.post('http://localhost:5000/detect_objects', formData, {
      responseType: 'blob',
    });
  }

  onUpload() {
    const inputElement: HTMLInputElement | null = document.querySelector('#fileInput');
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.detectObjects(file).subscribe((response: Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = () => {
          this.detectedImageUrl = reader.result;
        };
      });
    } else {
      console.error('No file selected');
    }
  }
}
