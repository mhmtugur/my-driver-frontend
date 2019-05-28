import { Component, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'search-bar'
})
export class SearchBar {
  @Event() onSubmit: EventEmitter<any>;
  
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.onSubmit.emit();
  }

  render() {
    return (
      <form id='search-form' onSubmit={this.handleOnSubmit} >
        <div class="row">
          <div class="col m5 s12">
            <location-container />
          </div>
          <div class="col m4 s12">
            <date-picker />
          </div>
          <div class="col m2 s12">
            <duration-dropdown />
          </div>
          <div class="col m1 s12">
            <search-button />
          </div>
        </div>
      </form>   
    );
  }
}