import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-createprod',
  templateUrl: './createprod.component.html',
  styleUrls: ['./createprod.component.css']
})
export class CreateprodComponent  {
  public productForm: FormGroup;
  public product: Product;
  public message = '';
  constructor(private productService: ProductService) {
    this.product = new Product('', '', 0, 0, 0);
  }

  createProduct(productForm) {
    /* if (productForm.valid) {
      this.productService.createProduct(this.product).subscribe((result: any) => {
        this.message = result.msg;
        this.product = new Product('', '', 0, 0, 0);
      }, (err) => { this.message = err.msg; });
    } else {
      console.error('stockForm 無效');
    } */
    if (productForm.valid) {
      let created = this.productService.createProduct(this.product);
      if (created) {
        this.message = '產品新增成功';
        this.product = new Product('', '', 0, 0, 0);
      } else { this.message = '產品已存在'; }
    } else {
      console.error('stockForm 無效');
    }
  }
}
