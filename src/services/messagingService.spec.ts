/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { Messaging } from './messagingService';

// factory
const createSut = () => {
  return new Messaging;
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // sut - system under test
    const sut = createSut();

    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    // sut - system under test
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('teste');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log once', () => {
    // sut - system under test
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('teste');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    // sut - system under test
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sut.sendMessage('teste');

    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
