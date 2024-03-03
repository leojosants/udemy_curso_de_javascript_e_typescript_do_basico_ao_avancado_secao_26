/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { Product } from './productClass';

// factory
const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // sut - system under test
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
