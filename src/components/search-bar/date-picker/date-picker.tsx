import { Component, Event, EventEmitter } from "@stencil/core";
import moment from 'moment';

@Component({
  tag:'date-picker'
})
export class DatePicker {
  @Event() onDateChange: EventEmitter<any>;
  dateFormat = 'YYYY-MM-DDTHH:mm';
  
  getCurrentDate(dateFormat) {
    return moment().format(dateFormat);    
  }

  getMaxDate(dateFormat) {
    return moment().add(1, 'y').format(dateFormat);
  }

  handleDateChange = (e) => {
    this.onDateChange.emit(e.target.value);
  }

  render() {
    return (
      <div class="input-field">
      <i class="material-icons prefix">event_on</i>  
        <input 
          type="datetime-local" 
          required={true}
          value={this.getCurrentDate(this.dateFormat)}
          min={this.getCurrentDate(this.dateFormat)} 
          max={this.getMaxDate(this.dateFormat)} 
          onChange={this.handleDateChange}></input>
      </div>
    );
  }
}