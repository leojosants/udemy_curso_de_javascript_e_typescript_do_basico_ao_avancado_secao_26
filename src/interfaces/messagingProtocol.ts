/* - - - - - - - - - - - - - - - interface - - - - - - - - - - - - - - - */
export interface MessagingProtocol {
  sendMessage(message: string): void;
}
