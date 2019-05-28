import { Component, Prop } from "@stencil/core";
import { Offer } from "../../../models/Offer";

@Component({
  tag:'offer-card-list'
})
export class OfferCardList {
  @Prop() offerList: Offer[] = [];

  createOfferCard = (offer) => {
    return (<div class="col s12 m6 l4">
              <offer-card offer={offer} />
            </div>);
  }

  render() {
    return (      
      <div>
        {this.offerList.map(this.createOfferCard)}    
      </div>
    );
  }
}