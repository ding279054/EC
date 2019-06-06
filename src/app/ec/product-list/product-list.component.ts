import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-qty-change';


@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list.component.html',
  // 不用自己的html,嵌入至prod-item的html,資料由product-list傳入,prod-item的操作回傳到product-list處理
  template: `
    <app-prod-item [product]="product"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products"></app-prod-item>
  `,
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  @Output() private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();
  constructor() { }
  public products: Array<Product>;
  ngOnInit(): void {
    this.products = [
      new Product('潮鞋', 'A0001', 1900, 2100, 0),
      new Product('名錶', 'A0002', 3999, 4500, 0),
      new Product('貴瓷', 'A0003', 2499, 2900, 0)
      ];
    // this.productobj = new Product ('潮鞋', 'A0001', 1900, 2100, 0);
  }


/* incrementInCart(event, index) {
   this.products[index].quantityInCart++;
}

decrementInCart(event, index) {
  if (this.products[index].quantityInCart > 0) {
    this.products[index].quantityInCart--;
  }
} */

onQuantityChange(change: ProductQuantityChange) {
  const product = this.products.find(prod => {
    return change.product.code === prod.code;
  });
  product.quantityInCart += change.changeInQuantity;
}
}
