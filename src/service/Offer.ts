import axios from 'axios';
import { Offer } from '../models/Offer';

export async function getOffersBySearchItem(searchItem) {
  let offerResponse = await axios.post('http://localhost:3000/offers', searchItem);
  return offerResponse.data.map((offer) => new Offer(offer));
}

