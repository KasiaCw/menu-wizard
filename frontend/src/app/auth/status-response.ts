export class StatusResponse {
  message: string;
  status: Status;

  constructor(message:string, status:Status) {
    this.message = message;
    this.status = status;
  }
}

export enum Status{
  SUCCESS= 'SUCCESS',
  FAILURE = 'FAILURE'
}
