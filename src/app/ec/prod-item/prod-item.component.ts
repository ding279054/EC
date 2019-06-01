import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {
  public product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product ('潮鞋', 'A0001', 1900, 2100);
  }
  toggleFavorite(event) {
    console.log('toggling the favorite!', event);
    this.product.favorite = !this.product.favorite;
  }

  incrementInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  }


}
