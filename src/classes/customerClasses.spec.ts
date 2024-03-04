/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { IndividualCustomer, EntrepriseCustomer } from './customerClasses';

// factory
const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEntrepriseCustomer = (name: string, cnpj: string): EntrepriseCustomer => {
  return new EntrepriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstname, lastName and cpf', () => {

    // sut - system under test
    const sut = createIndividualCustomer('Leo', 'Santos', '000.000.000-00');

    expect(sut).toHaveProperty('firstName', 'Leo',);

    expect(sut).toHaveProperty('lastName', 'Santos');

    expect(sut).toHaveProperty('cpf', '000.000.000-00');
  });
});

describe('IndividualCustomer', () => {
  it('should have methods get name and idn for individual customer', () => {

    // sut - system under test
    const sut = createIndividualCustomer('Leo', 'Santos', '000.000.000-00');

    expect(sut.getName()).toBe('Nome completo: Leo Santos');

    expect(sut.getIDN()).toBe('CPF: 000.000.000-00');
  });
});

describe('EntrepriseCustomer', () => {
  it('should have name, and cnpj for entreprise customer', () => {

    // sut - system under test
    const sut = createEntrepriseCustomer('Empresa', '000.000.000-00');

    expect(sut).toHaveProperty('name', 'Empresa');

    expect(sut).toHaveProperty('cnpj', '000.000.000-00');
  });
});

describe('EntrepriseCustomer', () => {
  it('should have methods get name and idn', () => {

    // sut - system under test
    const sut = createEntrepriseCustomer('Empresa', '000.000.000-00');

    expect(sut.getName()).toBe('Nome: Empresa');

    expect(sut.getIDN()).toBe('CNPJ: 000.000.000-00');
  });
});
