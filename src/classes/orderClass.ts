/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { ShoppingCart } from "./shoppingCartClass";
import { OrderStatusType } from "../types/orderStatusType";
import { Messaging } from "../services/messagingService";
import { Persistency } from "../services/persintencyService";
import { ShoppingCartProtocol } from "../interfaces/shoppingCartProtocol";
import { CustomerOrderProtocol } from "../interfaces/CustomerProtocol";
import { MessagingProtocol } from "../interfaces/messagingProtocol";
import { PersistencyProtocol } from "../interfaces/persistencyProtocol";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class Order {
  private _orderStatus: OrderStatusType = 'open';
  private readonly cart: ShoppingCartProtocol;
  private readonly messaging: MessagingProtocol;
  private readonly persistency: PersistencyProtocol;
  private readonly customer: CustomerOrderProtocol;

  constructor(cart: ShoppingCart, messaging: Messaging, persistency: Persistency, customer: CustomerOrderProtocol) {
    this.cart = cart;
    this.messaging = messaging;
    this.persistency = persistency;
    this.customer = customer;
  }

  public get orderStatus(): OrderStatusType {
    return this._orderStatus;
  }

  public checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Carrinho vazio!');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(`Seu pedido com total de R$${this.cart.totalItemsWithDiscount()} foi recebido!`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('O cliente é:', this.customer.getName(), this.customer.getIDN());
  }
}
