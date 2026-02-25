import { Component, input, output, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productModel } from '../../model/product.model';

@Component({
  selector: 'prod-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard implements OnInit {

  readonly product = input.required<productModel>();
  readonly deleteProduct = output<number>();
  readonly Math = Math;

  likes = signal(0);
  liked = signal(false);

  ngOnInit() {
    this.likes.set(this.product().likes);
  }

  onLike(): void {
    this.likes.update((l: number) => l + 1);
    this.liked.set(true);
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product().id);
  }

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