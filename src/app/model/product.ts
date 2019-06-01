export class Product {
  favorite = false;
  quantityInCart = 0;

  constructor(public name: string,
              public code: string,
              public price: number,
              public stdprice: number) {}
    public ImageUrl = '/assets/images/' + this.code + '.jpg';
    isPositivechange(): boolean {
      return this.price >= this.stdprice;
    }
}
