import { Component } from "@stencil/core";

@Component({
  tag: 'top-banner',
  styleUrl: './top-banner.css'
})export class TopBanner {
  render(){
    return (
      <nav class="nav-container">
        <div class="nav-wrapper container">
          <img class="brand-logo" src="../../assets/image/sixt-logo.svg"></img>
        </div>
      </nav>
    );
  }
}