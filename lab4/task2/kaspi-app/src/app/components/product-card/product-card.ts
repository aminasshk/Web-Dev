import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productModel } from '../../models/product.model';

@Component({
  selector: 'prod-card',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {   

  readonly product = input.required<productModel>();
  readonly Math = Math;

  shareWhatsApp(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const message = `Check out this product: ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareTelegram(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const url = this.product().link;
    const text = this.product().name;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  }
}