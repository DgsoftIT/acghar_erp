import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  
  searchTitle: string = '';
  searchSKU: string = '';
  searchBrand: string = ''; 

  dataSource = [
    { id: 1, image: 'dashboard/admin/golden.png', title: 'Golden 500L Freezer', sku: 'SKU123', price: 85900, status: 'Active', brand: 'Golden', selected: false },
    { id: 2, image: 'dashboard/admin/golden.png', title: 'Golden 500L Freezer', sku: 'SKU124', price: 85900, status: 'Inactive', brand: 'Golden', selected: false },
  ];

  constructor(private router: Router) {}

  goToAddProduct() {
    this.router.navigate(['/admin/add-product']);  
  }

  
  editProduct(product: any) {
    console.log('Edit Product:', product); 
    this.router.navigate(['/admin/edit-product', product.id]); 
  }

  deleteProduct(product: any) {
    this.dataSource = this.dataSource.filter(p => p !== product);
    console.log('Deleted Product:', product);
  }

  filteredProducts() {
    return this.dataSource.filter(product =>
      product.title.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
      product.sku.toLowerCase().includes(this.searchSKU.toLowerCase()) &&
      product.brand.toLowerCase().includes(this.searchBrand.toLowerCase())  
    );
  }

  selectAll(event: any) {
    const isChecked = event.target.checked;
    this.dataSource.forEach(product => product.selected = isChecked);
  }
}
