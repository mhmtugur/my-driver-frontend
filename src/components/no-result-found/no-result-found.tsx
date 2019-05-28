import { Component } from "@stencil/core";

@Component({
  tag: 'no-result-found',
  styleUrl: './no-result-found.css'
})
export class NoResultFound {
  render(){
    return (
      <div class="result">
        <h5>No Result Found!</h5>
      </div>
    );
  }
}