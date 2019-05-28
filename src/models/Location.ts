export class Location {
  id: number
  originPlaceId: string
  city: string
  category: string
  label: string
  address: string

  constructor({ id, originPlaceId, city, category, label, address}) {
    this.id = id;
    this.originPlaceId = originPlaceId;
    this.city = city;
    this.category = category;
    this.label = label;
    this.address = address;
  }
}