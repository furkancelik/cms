import React, { Component } from "react";

export default class FormGroup extends Component {
  // validate() {
  //
  // }
  render() {
    return (
      <div
        className={
          this.props.validation && this.props.value === ""
            ? "form-group has-error"
            : "form-group"
        }
      >
        {this.props.label && (
          <label class="col-sm-2 control-label">{this.props.label}</label>
        )}
        <div
          className={
            this.props.label ? "col-sm-10" : "col-sm-offset-2 col-sm-10"
          }
        >
          {this.props.children}
          {this.props.validation &&
            this.props.value === "" && (
              <span class="help-block">{this.props.validate.required}</span>
            )}
        </div>
      </div>
    );
  }
}
