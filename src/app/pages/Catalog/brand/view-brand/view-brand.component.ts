import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../../../models/brand.model';
import { BrandService } from '../../../../services/Brand/brand.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-brand',
  templateUrl: './view-brand.component.html',
  imports: [
      CommonModule,
      FormsModule
    ],
  styleUrls: ['./view-brand.component.css']
})
export class ViewBrandComponent implements OnInit {
  brands: Brand[] = [];
  searchBrand: string = '';
  filteredBrands: Brand[] = [];

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands() {
    this.brandService.getAllBrands().subscribe((data: Brand[]) => {
      this.brands = data;
      this.filteredBrands = [...this.brands];
    });
  }

  filterCategories() {
    if (!this.searchBrand) {
      this.filteredBrands = [...this.brands];
    } else {
      this.filteredBrands = this.brands.filter((brand) =>
        brand.title.toLowerCase().includes(this.searchBrand.toLowerCase())
      );
    }
  }

  goToAddBrand() {
    this.router.navigate(['/admin/add-brand']);
  }

  editBrand(brand: Brand) {
    this.router.navigate(['/admin/edit-brand', brand.id]);
  }

  deleteBrand(brand: Brand) {
    if (confirm('Are you sure you want to delete this brand?')) {
      this.brandService.deleteBrand(brand.id!).subscribe(() => {
        this.brands = this.brands.filter((b) => b.id !== brand.id);
        this.filteredBrands = [...this.brands];
      });
    }
  }

  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.filteredBrands.forEach((brand) => (brand.selected = isChecked));
  }
}
