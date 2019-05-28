import { Component, Event, EventEmitter } from "@stencil/core";

@Component({
  tag:'duration-dropdown'
})
export class DurationDropdown {
  @Event() onDurationChange: EventEmitter<any>;

  handleOnDurationChange = (e) => {
    this.onDurationChange.emit(e.target.value);
  }

  render() {
    return (
      <div class="input-field">
      <select class="browser-default" 
        onChange={this.handleOnDurationChange}  
        required={true} >
          <option value="" disabled selected>Duration (Hours)</option>
          <option value="1">1 Hours</option>
          <option value="2">2 Hours</option>
          <option value="3">3 Hours</option>
          <option value="4">4 Hours</option>
          <option value="5">5 Hours</option>
          <option value="6">6 Hours</option>
          <option value="7">7 Hours</option>
          <option value="8">8 Hours</option>
          <option value="9">9 Hours</option>
          <option value="10">10 Hours</option>
          <option value="11">11 Hours</option>
          <option value="12">12 Hours</option>
          <option value="13">13 Hours</option>
          <option value="14">14 Hours</option>
          <option value="15">15 Hours</option>
          <option value="16">16 Hours</option>
          <option value="17">17 Hours</option>
          <option value="18">18 Hours</option>
          <option value="19">19 Hours</option>
          <option value="20">20 Hours</option>
          <option value="21">21 Hours</option>
          <option value="22">22 Hours</option>
          <option value="23">23 Hours</option>
          <option value="24">24 Hours</option>
        </select>
      </div>  
    );
  }
}