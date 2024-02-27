/* - - - - - - - - - - - - - - - imports - - - - - - - - - - - - - - - */
import { MessagingProtocol } from "../interfaces/messagingProtocol";

/* - - - - - - - - - - - - - - - class - - - - - - - - - - - - - - - */
export class Messaging implements MessagingProtocol {
  public sendMessage(message: string): void {
    console.log('Mensagem enviada:', message);
  }
}
