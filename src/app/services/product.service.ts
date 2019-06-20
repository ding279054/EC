import { Injectable } from '@angular/core';
import { Observable,  throwError as ObservadleThrow,  of as ObservadleOf} from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  constructor() {
    this.products = [
      new Product('潮鞋', 'A0001', 1900, 2100, 0),
      new Product('名錶', 'A0002', 9900, 10000, 0),
      new Product('貴瓷', 'A0003', 2900, 3000, 0)
    ];
  }
/*   getStocks(): Stock[] {
    return this.stocks;
  } */

  /* getProducts(): Observable<Product[]> {
    return ObservadleOf(this.products);
  }
 */
getProducts() {
  return this.products;
}


  createProduct(product: Product) {
    let foundProduct = this.products.find(each => each.code === product.code);
    if (foundProduct) {
      return false;
    }
    this.products.push(product);
    console.log(this.products);
    return true;
  }
  /* createProduct(product: Product): Observable<any> {
    let foundProdcut = this.products.find(each => each.code === product.code);
    if (foundProdcut) {
      return ObservadleThrow({msg: '此產品已存在'});
    }
    this.products.push(product);
    console.log(this.products);
    this.getProducts();
    return ObservadleOf({msg: '產品建立成功'});
  } */

 /*  toggleFavorite(stock: Stock) {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
  } */

}
