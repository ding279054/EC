import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from './model/product-qty-change';
import { ProductService } from '../app/services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecsite';
  constructor(public productService: ProductService) {}
  ngOnInit(): void {
  }

}
