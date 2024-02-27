/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { CardItemProtocol } from "../interfaces/CartItemProtocol";
import { ShoppingCartProtocol } from "../interfaces/shoppingCartProtocol";
import { Discount } from "./discountClasses";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CardItemProtocol[] = [];
  private readonly discount: Discount;

  constructor(discount: Discount) {
    this.discount = discount;
  }

  public get items(): Readonly<CardItemProtocol[]> {
    return this._items;
  }

  public addItem(item: CardItemProtocol): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  public totalItems(): number {
    return Number(this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2));
  }

  public totalItemsWithDiscount(): number {
    return this.discount.calculate(this.totalItems());
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compra zerado!');
  }
}
