import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from './components/product-card/product-card';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}