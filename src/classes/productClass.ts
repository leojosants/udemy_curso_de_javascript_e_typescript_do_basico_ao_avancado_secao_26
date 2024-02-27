/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { CardItemProtocol } from "../interfaces/CartItemProtocol";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class Product implements CardItemProtocol {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
