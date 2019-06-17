import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-createprod',
  templateUrl: './createprod.component.html',
  styleUrls: ['./createprod.component.css']
})
export class CreateprodComponent  {
  public productForm: FormGroup;
  public product: Product;
  public message = '';
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.product = new Product('潮鞋', 'A0001', 1900, 2100, 0);
   }

   /* createForm() {
    this.productForm = this.fb.group({
      name: ['test', Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
      notablePeople: this.fb.array([])
    });
    } */
    createForm() {
      this.productForm = this.fb.group({
        name: ['test', Validators.required],
        code: ['1111', [Validators.required, Validators.minLength(2)]],
        price: [1, [Validators.required, Validators.min(0)]],
        mutiProduct: this.fb.array([])});
      }
    get mutiProduct(): FormArray {
        return this.productForm.get('mutiProduct') as FormArray;
      }
      addNewProduct() {
        this.mutiProduct.push(this.fb.group({
          name: ['', Validators.required],
          code: ['', Validators.required],
          price: [0, [Validators.required, Validators.min(1)]]
        }));
      }
     removeProduct(index: number) {
        this.mutiProduct.removeAt(index);
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

  onSubmit() {
    // console.log('Name Control Value', this.nameControl.value);
    // console.log('stock Form Value', this.stockForm.value);
    if (this.productForm.valid) {
        this.product = Object.assign({}, this.productForm.value);
        console.log('儲存股票', this.product);
    } else {
      this.message = '表單輸入發生錯誤,請檢查!!';
      console.log('productForm 無效');
    }
  }

}
