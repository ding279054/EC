import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css']
})
export class ProdItemComponent implements OnInit {
  public product: Product;
  public ecClasses;
  private quantities: Array<number>;

  constructor() { }

  ngOnInit() {
    this.product = new Product ('潮鞋', 'A0001', 1900, 2100);
    this.ecClasses = {
      "positive": this.product.isPositivechange(),
      "negative": !this.product.isPositivechange()
       };
    this.quantities = [];
    for (let i = 0; i < 20; i++) {
      this.quantities.push(i);
    }

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

  onQtyChange(qty) {
    console.log('Quantity change ', qty);
  }

}
