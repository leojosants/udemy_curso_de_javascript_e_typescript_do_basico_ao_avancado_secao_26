/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { PersistencyProtocol } from "../interfaces/persistencyProtocol";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class Persistency implements PersistencyProtocol {
  public saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
}
