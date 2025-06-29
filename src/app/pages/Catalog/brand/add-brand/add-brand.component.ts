import { Component } from '@angular/core';
import { BrandService } from '../../../../services/Brand/brand.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddBrandComponent {
  brandObj = {
    title: '',
    url: '',
    order: '',
    description: ''
  };

  categoryObj = {
    isActive: false
  };

  imagePreviews: string[] = [];
  selectedImages: File[] = [];

  constructor(private brandService: BrandService) {}

  
  saveCategory(): void {
    if (this.isFormValid()) {
      const formData = new FormData();
  
   
      formData.append("title", this.brandObj.title);
      formData.append("url", this.brandObj.url);
      formData.append("order", this.brandObj.order);
      formData.append("description", this.brandObj.description);
      formData.append("isActive", this.categoryObj.isActive ? 'true' : 'false');
  

      this.selectedImages.forEach((file) => {
        formData.append("images", file);
      });
  
    
      this.brandService.createBrand(formData).subscribe(
        response => {
          console.log('Brand saved successfully:', response);
          this.clearForm();
        },
        error => {
          console.error('Error saving brand:', error);
        }
      );
    } else {
      console.log('Please fill all required fields.');
    }
  }


  clearForm(): void {
    this.brandObj = {
      title: '',
      url: '',
      order: '',
      description: ''
    };
    this.categoryObj = { isActive: false };
    this.imagePreviews = [];
    this.selectedImages = [];
  }

  
  isFormValid(): boolean {
    return (
      this.brandObj.title.trim() !== '' &&
      this.brandObj.url.trim() !== '' &&
      this.brandObj.order.trim() !== '' &&
      this.brandObj.description.trim() !== ''
    );
  }

 
  onImageSelect(event: any): void {
    const files = event.target.files as FileList;
    if (files && files.length > 0) {
      
      this.imagePreviews = [];
      this.selectedImages = [];

      Array.from(files).forEach((file) => {
        this.selectedImages.push(file);

        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);  
        };
        reader.readAsDataURL(file);
      });
    }
  }

  
  removeImage(index: number): void {
    if (index >= 0 && index < this.imagePreviews.length) {
      this.imagePreviews.splice(index, 1);
      this.selectedImages.splice(index, 1);
    }
  }
}
