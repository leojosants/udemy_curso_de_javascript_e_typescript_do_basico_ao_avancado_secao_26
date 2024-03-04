/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CardItemProtocol } from '../interfaces/CartItemProtocol';
import { MessagingProtocol } from '../interfaces/messagingProtocol';
import { PersistencyProtocol } from '../interfaces/persistencyProtocol';
import { CustomerOrderProtocol } from '../interfaces/CustomerProtocol';
import { Order } from './orderClass';
import { ShoppingCartProtocol } from '../interfaces/shoppingCartProtocol';

// mocks
class ShopingCartMock implements ShoppingCartProtocol {

  get items(): Readonly<CardItemProtocol[]> {
    return [];
  }

  addItem(item: CardItemProtocol): void { }

  removeItem(index: number): void { }

  totalItems(): number {
    return 1;
  }

  totalItemsWithDiscount(): number {
    return 2;
  }

  isEmpty(): boolean {
    return false;
  }

  clear(): void { }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(message: string): void { }
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void { }
}

class CustomerMock implements CustomerOrderProtocol {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

// factory
const createSut = () => {
  const shoppingCartMock = new ShopingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, customerMock);
  return { sut, shoppingCartMock, messagingMock, persistencyMock, customerMock };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    // const order = new Order();
  });
});
