import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-createprod',
  templateUrl: './createprod.component.html',
  styleUrls: ['./createprod.component.css']
})
export class CreateprodComponent  {
  public product: Product;
  public message = '';
  constructor() {
    this.product = new Product('潮鞋', 'A0001', 1900, 2100, 0);
   }

   createProduct(productForm) {
    console.log('product Form', productForm.value);
    if (productForm.valid) {
      this.product = productForm.value.product;
      console.log('createing stock', this.product);
    } else {
      this.message = '表單輸入發生錯誤,請檢查!!';
      console.log('productForm 無效');
    }
  }

}
