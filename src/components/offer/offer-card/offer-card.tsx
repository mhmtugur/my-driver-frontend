import { Component, Prop } from "@stencil/core";
import { Offer } from "../../../models/Offer";

@Component({
  tag:'offer-card',
  styleUrl: './offer-card.css'
})
export class OfferCard {
  @Prop() offer: Offer;

  render() {
    return (
      <div class="card">
        <div class="card-image">
          <img src={this.offer && this.offer.web_img} />
        </div>
        <div class="card-content">
          <p class="card-right-text">{this.offer && this.offer.amount} EUR</p><br/><br/>
          <p class="card-title truncate">{this.offer && this.offer.title}</p>
          <p class="truncate">{this.offer && this.offer.exampleCar}</p>
        </div>
        <div class="card-action">
          <a class="btn waves-effect waves-light">SELECT</a>
        </div>
      </div>
    );
  }
}