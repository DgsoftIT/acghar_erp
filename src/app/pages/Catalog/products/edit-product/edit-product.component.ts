import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditProductComponent implements OnInit {

  productObj: Product = new Product();
  productId: number = 0;
  categoryList: Category[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = ''; // To show success feedback

  isSubMenuVisible: boolean = false;
  isSubMenuPricesVisible: boolean = false;
  isSubMenuImagesVisible: boolean = false;
  isSubMenuSEOVisible: boolean = false;

  constructor(
    private productSrv: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = +this.activatedRoute.snapshot.params['id']; // Ensure it's a number
    if (this.productId) {
      this.getProductDetails();
    } else {
      this.errorMessage = 'Product ID is missing.';
      console.error(this.errorMessage);
    }
    this.getCategories();
  }

  getCategories(): void {
    this.productSrv.getCategory().subscribe(
      (categories: Category[]) => {
        this.categoryList = categories;
        console.log('Categories fetched: ', this.categoryList);
      },
      (error) => {
        this.errorMessage = 'Error fetching categories';
        console.error('Error fetching categories', error);
      }
    );
  }

  getProductDetails(): void {
    this.isLoading = true;
    this.productSrv.getProductById(this.productId).subscribe(
      (product: Product) => {
        this.productObj = product;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching product details';
        console.error('Error fetching product details', error);
        this.isLoading = false;
      }
    );
  }

  saveProduct(): void {
    if (this.isValidProduct()) {
      this.isLoading = true;

      const formData = new FormData();
      formData.append('productName', this.productObj.productName);
      formData.append('productUrl', this.productObj.productUrl);

      // Ensure categoryId is valid
      formData.append('categoryId', (this.productObj.categoryId ?? '').toString());

      // Optional fields
      if (this.productObj.seoDescription) {
        formData.append('seoDescription', this.productObj.seoDescription);
      }

      if (this.productObj.price != null) {
        formData.append('price', this.productObj.price.toString());
      }

      this.productSrv.updateProduct(this.productId, formData).subscribe(
        (res: Product) => {
          console.log('Product updated successfully', res);
          this.successMessage = 'Product updated successfully!';
          setTimeout(() => {
            this.successMessage = ''; // Clear success message after 3 seconds
            this.router.navigate(['/admin/products']);
          }, 3000);
        },
        (error) => {
          this.errorMessage = 'Error updating product';
          console.error('Error updating product:', error);
          this.isLoading = false;
        }
      );
    } else {
      this.errorMessage = 'Form validation failed. Please fill all required fields.';
    }
  }

  isValidProduct(): boolean {
    return (
      typeof this.productObj.productName === 'string' &&
      this.productObj.productName.trim().length > 0 &&
      typeof this.productObj.productUrl === 'string' &&
      this.productObj.productUrl.trim().length > 0 &&
      typeof this.productObj.categoryId === 'number' &&
      this.productObj.categoryId > 0
    );
  }

  toggleSubMenu(): void {
    this.isSubMenuVisible = !this.isSubMenuVisible;
  }

  toggleSubMenuPrices(): void {
    this.isSubMenuPricesVisible = !this.isSubMenuPricesVisible;
  }

  toggleSubMenuImages(): void {
    this.isSubMenuImagesVisible = !this.isSubMenuImagesVisible;
  }

  toggleSubMenuSEO(): void {
    this.isSubMenuSEOVisible = !this.isSubMenuSEOVisible;
  }
}
