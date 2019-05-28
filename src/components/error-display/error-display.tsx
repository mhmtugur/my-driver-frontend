import { Component, Prop } from "@stencil/core";
import { Error } from "../../models/Error";

@Component({
  tag: 'error-display', 
  styleUrl: './error-display.css'
})
export class ErrorDisplay {
  @Prop() error:Error;

  render() {
    return (
      <div class="error-display">
        <span>{`Error: ${this.error && this.error.errorConstant}  ${this.error && this.error.errorMessage }`}</span>
      </div>
    );
  }
}