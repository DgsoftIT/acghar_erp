import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/category/category.service';

// Define Category class with default values so no undefined errors
export class Category {
  categoryTitle: string = '';
  categoryUrl: string = '';
  categoryType: string = '';
  subCategory: string = '';
  productType: string = '';
  metaTagTitle: string = '';
  metaKeyword: string[] = []; // Initialize as empty array
  description: string = '';
  metaDescription: string = '';
  isActive: boolean = true;
  images: File[] = [];

  constructor(init?: Partial<Category>) {
    Object.assign(this, init);
  }
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AddCategoryComponent {
  // Initialize categoryObj with all properties including metaKeyword as []
  categoryObj: Category = new Category();

  imagePreviews: string[] = [];
  selectedImages: File[] = [];
  newKeyword: string = '';

  categories = [
    {
      name: 'Home Appliances',
      subCategories: []
    },
    {
      name: 'Kitchen Appliances',
      subCategories: [
        { name: 'Blender', childCategories: [] },
        {
          name: 'Chimney',
          childCategories: [
            '3D Chimney',
            'Auto Clean Chimney',
            'Island Chimney',
            'Steam Auto Clean Chimney',
            'Wall Chimney'
          ]
        },
        { name: 'Electric Oven', childCategories: [] }
      ]
    },
    {
      name: 'Smart Appliances',
      subCategories: [
        { name: 'Blender', childCategories: [] },
        {
          name: 'Chimney',
          childCategories: [
            '3D Chimney',
            'Auto Clean Chimney',
            'Island Chimney',
            'Steam Auto Clean Chimney',
            'Wall Chimney'
          ]
        },
        { name: 'Electric Oven', childCategories: [] }
      ]
    },
    { name: 'Spares & Accessories', subCategories: [] },
    { name: 'Commercial Products', subCategories: [] }
  ];

  selectedCategory: { name: string; subCategories: any[] } | null = null;
  selectedSubCategory: { name: string; childCategories: string[] } | null = null;
  selectedChildCategory: string | null = null;
  isCategoryModalVisible: boolean = false;
  selectedCategoryText: string = '';

  constructor(private categoryService: CategoryService) {}

  toggleCategoryModal() {
    this.isCategoryModalVisible = !this.isCategoryModalVisible;
  }

  onSelectCategory(category: { name: string; subCategories: any[] }) {
    this.selectedCategory = category;
    this.selectedSubCategory = null;
    this.selectedChildCategory = null;
  }

  onSelectSubCategory(subCategory: { name: string; childCategories: string[] }) {
    this.selectedSubCategory = subCategory;
    this.selectedChildCategory = null;
  }

  onSelectChildCategory(childCategory: string) {
    this.selectedChildCategory = childCategory;
  }

  confirmCategorySelection() {
    if (this.selectedCategory) {
      this.selectedCategoryText = this.selectedCategory.name;

      if (this.selectedSubCategory) {
        this.selectedCategoryText += ` / ${this.selectedSubCategory.name}`;
      }
      if (this.selectedChildCategory) {
        this.selectedCategoryText += ` / ${this.selectedChildCategory}`;
      }

      this.categoryObj.categoryType = this.selectedCategory.name;
      this.categoryObj.subCategory = this.selectedSubCategory?.name || '';
      this.categoryObj.productType = this.selectedChildCategory || '';
      this.isCategoryModalVisible = false;
    } else {
      console.log('Please select at least a category.');
    }
  }

  saveCategory() {
    if (!this.categoryObj.categoryTitle || !this.categoryObj.categoryUrl) {
      console.log('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();

    Object.entries(this.categoryObj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item as any);
        });
      } else if (value !== null && value !== undefined) {
        formData.append(key, value as any);
      }
    });

    this.selectedImages.forEach((file, index) => {
      formData.append(`productImages[${index}]`, file);
    });

    console.log('Saving Category:', this.categoryObj);

    // Uncomment and replace below with your actual service call:
    /*
    this.categoryService.createCategory(formData).subscribe(
      (response) => {
        console.log('Category saved successfully:', response);
        this.clearForm();
      },
      (error) => {
        console.error('Error saving category:', error);
      }
    );
    */
  }

  clearForm(): void {
    this.categoryObj = new Category(); // reset with empty arrays and defaults
    this.imagePreviews = [];
    this.selectedImages = [];
    this.selectedCategory = null;
    this.selectedSubCategory = null;
    this.selectedChildCategory = null;
    this.selectedCategoryText = '';
    this.newKeyword = '';
  }

  convertToUrl(): void {
    if (this.categoryObj.categoryTitle) {
      this.categoryObj.categoryUrl = this.categoryObj.categoryTitle
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-+|-+$/g, '');
    }
  }

  onImageSelect(event: any): void {
    const files = event.target.files as FileList;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviews.push(reader.result as string);
        this.selectedImages.push(file);
      };
      reader.readAsDataURL(file);
    });
  }

  removeImage(index: number): void {
    this.imagePreviews.splice(index, 1);
    this.selectedImages.splice(index, 1);
  }

  addKeyword(): void {
    const keyword = this.newKeyword.trim();
    if (keyword && !this.categoryObj.metaKeyword.includes(keyword)) {
      this.categoryObj.metaKeyword.push(keyword);
      this.newKeyword = '';
    }
  }

  removeKeyword(index: number): void {
    this.categoryObj.metaKeyword.splice(index, 1);
  }
}
