import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'location-search'
})export class LocationSearch {
  @Prop() locationName: string;
  @Prop() searchString: string;
  @Event() onLocationInputFocus: EventEmitter<any>;
  @Event() onLocationInputChange: EventEmitter<any>;

  handleOnLocationInputChange = (e) => {
    this.onLocationInputChange.emit(e.target.value);
  }

  handleOnLocationFocus = (e) => {
    this.onLocationInputFocus.emit(e.target);
  }

  getLocationString = () => {
    if (this.searchString)
      return this.searchString;
    if (this.locationName)
      return this.locationName;
  }

  render() {
    return (
      <div class="input-field">
        <i class="material-icons prefix">location_on</i>
        <input 
               id="searchInput"
               class="validate truncate" 
               required={true} type="text"
               autocomplete= "off" 
               placeholder="City,airport,location... etc." 
               onInput={this.handleOnLocationInputChange} 
               value={this.getLocationString()} 
               onFocus={this.handleOnLocationFocus} />
      </div>
    );
  }
}