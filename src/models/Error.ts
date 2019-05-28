export class Error {
  errorConstant: string
  errorMessage: string

  constructor({ errorConstant, errorMessage }){
    this.errorConstant = errorConstant;
    this.errorMessage = errorMessage;
  }
}