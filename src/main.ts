/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { Order } from "./classes/orderClass";
import { Persistency } from "./services/persintencyService";
import { Product } from "./classes/productClass";
import { ShoppingCart } from "./classes/shoppingCartClass";
import { NoDiscount } from './classes/discountClasses';
import { EntrepriseCustomer } from "./classes/customerClasses";
import { Messaging } from "./services/messagingService";

/* - - - - - - - - - - - - - - - main - - - - - - - - - - - - - - - */
(function main() {

  const noDiscount = new NoDiscount();

  const shoppingCart = new ShoppingCart(noDiscount);

  const messaging = new Messaging();

  const persistency = new Persistency();

  const enterpriseCustomer = new EntrepriseCustomer('pcDeveloper', '00.000.000/0000-00');

  const order = new Order(
    shoppingCart, messaging, persistency, enterpriseCustomer
  );

  const shirtProduct = new Product('Camisa', 49.91);
  const notebookProduct = new Product('Caderno', 9.9123);
  const pencilProduct = new Product('Lápis', 1.59);

  shoppingCart.addItem(shirtProduct);
  shoppingCart.addItem(notebookProduct);
  shoppingCart.addItem(pencilProduct);

  console.log('Itens:', shoppingCart.items);
  console.log(`Total: R$${shoppingCart.totalItems()}`);
  console.log(`Total com desconto: R$${shoppingCart.totalItemsWithDiscount()}`);
  console.log(`Status: ${order.orderStatus}`);

  order.checkout();

  console.log(`Status: ${order.orderStatus}`);
})()
