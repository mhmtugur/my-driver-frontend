import { Component } from "@stencil/core";

@Component({
  tag:'search-button'
})
export class SearchButton {
  
  render() {
    return (
      <div class="input-field">
        <button class="btn waves-effect waves-light">Search</button> 
      </div>
    );
  }
}