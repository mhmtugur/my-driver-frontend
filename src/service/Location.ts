import axios from 'axios';
import { Location } from '../models/location';

export async function getLocationsBySearchStringandLocale(searchString, locale) {
  let locationResponse = await axios.get(`http://localhost:3000/locations/?searchString=${searchString}&locale=${locale}`);
  return locationResponse.data.map((location) => new Location(location));
}


