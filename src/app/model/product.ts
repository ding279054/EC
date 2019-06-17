export class Product {
  favorite = false;
  mutiProduct: Products[];
  // quantityInCart = 0;

  constructor(public name: string,
              public code: string,
              public price: number,
              public stdprice: number,
              public quantityInCart: number) {
                this.mutiProduct = [];
              }
    public ImageUrl = '/assets/images/' + this.code + '.jpg';
    isPositivechange(): boolean {
      return this.price >= this.stdprice;
    }
}
export class Products {
  name: string;
  code: string;
  price: number;
}
