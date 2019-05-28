import { Component, State, Listen, Event, EventEmitter } from "@stencil/core";
import moment from 'moment';
import { getOffersBySearchItem } from '../../service/Offer';
import { Offer } from '../../models/Offer';
import { Error } from "../../models/Error";
import { createError } from '../../Utils/Error';

@Component({
  tag: 'main-container'
})
export class MainContainer {
  @State() offerSearchItem =  {
    originPlaceId : '',
    selectedStartDate : moment().add(2,'d').format(),
    duration : '480',
    type: 'DURATION'
  };

  @State() offerList: Offer[];
  @State() isNoResult: boolean = false;
  @State() error: Error;
  @Event() errorOccured: EventEmitter<Error>;

  @Listen('onSelectLocation')
  handleSelectLocation (location) {
    this.offerSearchItem.originPlaceId = location.detail.originPlaceId;
  }

  @Listen('onDateChange')
  handleDateChange (e){
    this.offerSearchItem.selectedStartDate = moment(e.detail).format(); 
  }
  
  @Listen('onDurationChange')
  handleDurationChange(e) {
    this.offerSearchItem.duration = (e.detail * 60).toString();
  }

  @Listen('onSubmit')
  async handleBtnOnClick (){
    try {
      this.error = null;
      this.offerList = [];
      this.offerList = await getOffersBySearchItem(this.offerSearchItem); 
      this.isNoResult = this.offerList.length == 0;
    } catch (err) {
      this.errorOccured.emit(createError(err));
    }    
  }

  @Listen('errorOccured')
  handleErrorOccured (e) {
    this.error = e.detail;    
  }
  
  @Listen('cleanError')
  handleCleanError () {
    this.error = null;    
  }
  
  render(){
    return (
      <div>
        {this.error && 
         <error-display error={this.error} />}        
        <top-banner />
        <div class="container">
          <div class="row">
            <search-bar />
          </div>
          <div class="row">
            {this.isNoResult ? <no-result-found /> : <offer-card-list offerList={this.offerList} />}
          </div>
        </div>
      </div>
    );
  }
}