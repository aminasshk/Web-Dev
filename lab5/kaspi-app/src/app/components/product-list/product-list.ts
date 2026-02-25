import { Component, input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productModel } from '../../model/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'prod-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnChanges {

  readonly products = input.required<productModel[]>();
  displayProducts: productModel[] = [];

  ngOnChanges() {
    this.displayProducts = [...this.products()];
  }

  onDelete(productId: number): void {
    this.displayProducts = this.displayProducts.filter(p => p.id !== productId);
  }
}