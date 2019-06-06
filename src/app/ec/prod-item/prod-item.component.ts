import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-qty-change';

@Component({
  selector: 'app-prod-item',
  templateUrl: './prod-item.component.html',
  styleUrls: ['./prod-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProdItemComponent implements OnInit {
  // public product: Product;
  public ecClasses;
  private quantities: Array<number>;
  @Input() public product: Product;
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // this.product = new Product ('潮鞋', 'A0001', 1900, 2100, 0);
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

/*   incrementInCart() {
    this.product.quantityInCart++;
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.product.quantityInCart--;
    }
  } */

  onQtyChange(qty) {
    console.log('Quantity change ', qty);
  }

  incrementInCart() {
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.quantityChange.emit({product: this.product, changeInQuantity: -1});
    }
  }

}
