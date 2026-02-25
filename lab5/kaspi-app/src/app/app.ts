import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from './services/product.services';
import { categoryModel } from './model/category.model';
import { productModel } from './model/product.model';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  categories: categoryModel[] = [];
  products: productModel[] = [];
  selectedCategoryId = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;

    if (categoryId === 0) {
      this.products = this.productService.getProducts();
    } else {
      this.products = this.productService.getProductsByCategory(categoryId);
    }
  }
}