export class Offer {
  amount: number
  currency: string
  title: string
  exampleCar : string
  web_img: string

  constructor({ amount, currency, title, exampleCar, web_img }) {
    this.amount = amount
    this.currency = currency;
    this.title = title;
    this.exampleCar = exampleCar;
    this.web_img = web_img;
  }
}