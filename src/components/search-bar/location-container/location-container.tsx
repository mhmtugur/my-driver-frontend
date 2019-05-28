import { Component, State, Listen, Event, EventEmitter } from "@stencil/core";
import { getLocationsBySearchStringandLocale } from '../../../service/Location';
import { Location } from "../../../models/location";
import { Error } from "../../../models/Error";
import { createError } from '../../../Utils/Error';

@Component({
  tag:'location-container',
  styleUrl: './location-container.css'
})
export class LocationContainer{
  @State() searchString: string = '';
  @State() locations: Location[] = [];
  @State() selectedLocation: Location;
  @State() showLocations: boolean = false;
  @Event() errorOccured: EventEmitter<Error>;
  @Event() cleanError: EventEmitter<any>;

  @Listen('onLocationInputChange')
  async handleOnLocationSearchInputChange(e) {   
    this.searchString = e.detail;
    if(!e.detail){
      this.selectedLocation = null;
      this.locations = [];
      return;
    } 
    try {
      this.locations = await getLocationsBySearchStringandLocale(this.searchString, 'us');
      this.cleanError.emit();  
    } catch (err) {
      this.errorOccured.emit(createError(err));
    }    
  };

  @Listen('onSelectLocation')
  handleSelectLocation(location) {
    this.selectedLocation = location.detail;
    this.searchString = '';
    this.showLocations = false;
  };

  @Listen('onLocationInputFocus')
  handleLocationSearchFocus(e) {
    this.showLocations = true;
    this.searchString = e.detail.value;   
    e.detail.select();
  }

  getLocationName () {
    if(this.selectedLocation){
      return `${this.selectedLocation.label}, ${this.selectedLocation.city}`;
    }
  }

  render(){
     return (     
       <div>
         <div>
           <location-search
             searchString={this.searchString}
             locationName={this.getLocationName()} />
         </div>
         {this.showLocations &&
          <div class="location-list" >
            <location-list locations={this.locations} />
          </div>
         }
       </div>
    );
  }
}