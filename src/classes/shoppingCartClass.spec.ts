import { CardItemProtocol } from '../interfaces/CartItemProtocol';
import { Discount } from './discountClasses';
import { ShoppingCart } from './shoppingCartClass';

// factory
const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount { }
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class cartItemMock implements CardItemProtocol {
    public name: string;
    public price: number;

    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }

  return new cartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem('Camise', 40);
  const cartItem2 = createCartItem('Caneta', 1);

  sut.addItem(cartItem1);
  sut.addItem(cartItem2);

  return { sut, discountMock }
}

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.totalItems()).toBe(41);
    expect(sut.totalItemsWithDiscount()).toBe(41);
  });

  it('should add product and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should call discount.calculate once when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalItemsWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should call discount.calculate with total price when totalWithDiscount is called', () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, 'calculate');
    sut.totalItemsWithDiscount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.totalItems());
  });
});
