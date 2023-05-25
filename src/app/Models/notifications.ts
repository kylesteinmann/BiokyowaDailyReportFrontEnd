

export class Notification {
  message: string;
  read?: boolean;


  constructor(
    Message = '',
    read = false,
  ) {

    this.message = Message;
    this.read = read;

  }
}
