import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isSubMenuVisible = false;
  isSubMenuPricesVisible = false;
  isSubMenuImagesVisible = false;
  isSubMenuSEOVisible = false;

  productObj: Product = new Product();
  categoryList: Category[] = [];
  imagePreviews: string[] = [];
  imageCaptions: string[] = [];
  selectedImages: File[] = [];

  newKeyword: string = '';

  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(): void {
    this.productSrv.getCategory().subscribe(
      (res: Category[]) => {
        this.categoryList = res;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  saveProduct(): void {
    if (typeof this.productObj.categoryId === 'string') {
      this.productObj.categoryId = Number(this.productObj.categoryId);
    }
    if (this.isValidProduct()) {
      this.productObj.productImages = this.selectedImages;
      const formData = this.productToFormData(this.productObj);
      this.productSrv.createProduct(formData).subscribe(
        (res: Product) => {
          console.log('Product saved successfully', res);
        },
        (error) => {
          console.error('Error saving product:', error);
        }
      );
    } else {
      console.error('Form validation failed');
    }
  }

  isValidProduct(): boolean {
    return (
      typeof this.productObj.productName === 'string' &&
      this.productObj.productName.trim().length > 0 &&
      typeof this.productObj.productUrl === 'string' &&
      this.productObj.productUrl.trim().length > 0 &&
      typeof this.productObj.categoryId === 'number' &&
      !!this.productObj.categoryId
    );
  }

  toggleSubMenu() {
    this.isSubMenuVisible = !this.isSubMenuVisible;
  }

  toggleSubMenuPrices() {
    this.isSubMenuPricesVisible = !this.isSubMenuPricesVisible;
  }

  toggleSubMenuImages() {
    this.isSubMenuImagesVisible = !this.isSubMenuImagesVisible;
  }

  toggleSubMenuSEO() {
    this.isSubMenuSEOVisible = !this.isSubMenuSEOVisible;
  }

  onImageSelect(event: any): void {
    const files: FileList = event.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
          this.imageCaptions.push("");
        };
        reader.readAsDataURL(file);
        this.selectedImages.push(file);
      });
    }
  }

  removeImage(index: number): void {
    this.imagePreviews.splice(index, 1);
    this.imageCaptions.splice(index, 1);
    this.selectedImages.splice(index, 1);
  }

  addKeyword() {
    if (this.newKeyword.trim()) {
      if (!this.productObj.metaKeyword) {
        this.productObj.metaKeyword = [];
      }
      this.productObj.metaKeyword.push(this.newKeyword.trim());
      this.newKeyword = '';
    }
  }

  removeKeyword(index: number) {
    if (this.productObj.metaKeyword) {
      this.productObj.metaKeyword.splice(index, 1);
    }
  }

  // Utility: Convert Product object to FormData for file upload
  private productToFormData(product: Product): FormData {
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      if (key === 'productImages' && Array.isArray(value)) {
        value.forEach((file: File) => formData.append('productImages', file));
      } else if (Array.isArray(value)) {
        value.forEach((item, idx) => formData.append(`${key}[${idx}]`, item));
      } else if (value !== null && value !== undefined) {
        formData.append(key, value as any);
      }
    });
    return formData;
  }
}
