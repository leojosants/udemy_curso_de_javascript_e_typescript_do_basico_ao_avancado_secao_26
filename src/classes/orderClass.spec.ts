/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CardItemProtocol } from '../interfaces/CartItemProtocol';
import { MessagingProtocol } from '../interfaces/messagingProtocol';
import { PersistencyProtocol } from '../interfaces/persistencyProtocol';
import { CustomerOrderProtocol } from '../interfaces/CustomerProtocol';
import { Order } from './orderClass';
import { ShoppingCartProtocol } from '../interfaces/shoppingCartProtocol';
import { ShoppingCart } from './shoppingCartClass';

// mocks
class ShoppingCartMock implements ShoppingCartProtocol {

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
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send  an email to customer', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkout();

    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');

    sut.checkout();

    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
