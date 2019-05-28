import { Component, Prop } from "@stencil/core";
import { Location } from "../../../../models/location";

@Component({
  tag: 'location-list'
})
export class LocationList {
  @Prop() locations: Location[];
  
  createLocationListItem = (location: Location) => {
    return <location-list-item
            key={location.id} 
            location={location} />
  }

  render() {
    return (
      <div>
        {this.locations && this.locations.map(this.createLocationListItem)}
      </div>
    );
  }
}