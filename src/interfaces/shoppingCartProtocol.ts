/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { CardItemProtocol } from "./CartItemProtocol";

/* - - - - - - - - - - - - - - - interface - - - - - - - - - - - - - - - */
export interface ShoppingCartProtocol {
  items: Readonly<CardItemProtocol[]>;

  addItem(item: CardItemProtocol): void;

  removeItem(index: number): void;

  totalItems(): number;

  totalItemsWithDiscount(): number;

  isEmpty(): boolean;

  clear(): void;
}
