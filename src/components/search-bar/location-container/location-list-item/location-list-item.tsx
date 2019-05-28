import { Component, Prop, Event, EventEmitter } from "@stencil/core";
import { Location } from "../../../../models/location";

@Component({
  tag:'location-list-item',
  styleUrl: './location-list-item.css'
})
export class LocationListItem {
  @Prop() location: Location;
  @Event() onSelectLocation: EventEmitter<Location>;

  handleOnSelection = () => {
    this.onSelectLocation.emit(this.location);
  }

  render() {
    return (
      <div class="list-item" onClick={this.handleOnSelection}>
        <i class="material-icons location-icon">location_on</i>
        <div>
          <span class="label">{this.location ? this.location.label : ''}</span>
          <span class="address truncate">{this.location ? this.location.address : ''}</span>
        </div>
      </div>
    );
  }
}