import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../services/category/category.service';
import { Category } from '../../../models/category.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-category',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  categories: Category[] = [];
  searchTitle: string = '';
  filteredCategories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories(); 
  }

  loadCategories(): void {
    this.categories = [
     
    ];

    
    this.filteredCategories = [...this.categories];
  }

  filterCategories(): void {

    const searchTerm = this.searchTitle.trim().toLowerCase();
    if (!searchTerm) {
      this.filteredCategories = [...this.categories];
    } else {
      this.filteredCategories = this.categories.filter((category) =>
        category.categoryTitle.toLowerCase().includes(searchTerm)
      );
    }
  }

  goToAddCategory(): void {
    this.router.navigate(['/admin/add-category']);
  }

  editCategory(category: Category): void {
    console.log('Edit Category:', category); 
    this.router.navigate(['/admin/edit-category', category.id]); 
  }

  deleteCategory(category: Category): void {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categories = this.categories.filter((c) => c.id !== category.id);
      this.filteredCategories = [...this.categories]; 
    }
  }

  selectAll(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.categories.forEach((category) => (category.selected = isChecked)); 
  }
}
