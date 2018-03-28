import React, { Component } from "react";
export default class AlertMessage extends Component {
  constructor(props) {
    super(props);
  }

  renderButton() {
    return (
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-hidden="true"
      >
        ×
      </button>
    );
  }

  render() {
    let type = "";
    let title = "";
    let message = "";
    if (typeof this.props.data !== "undefined") {
      type = this.props.data.type;
      title = this.props.data.title;
      message = this.props.data.message;
    }

    if (type === "danger") {
      return (
        <div class="alert alert-danger alert-dismissible">
          {this.renderButton()}
          <h4>
            <i class="icon fa fa-ban" /> {title}
          </h4>
          {message}
        </div>
      );
    } else if (type === "info") {
      return (
        <div class="alert alert-info alert-dismissible">
          {this.renderButton()}
          <h4>
            <i class="icon fa fa-info" /> {title}
          </h4>
          {message}
        </div>
      );
    } else if (type === "warning") {
      return (
        <div class="alert alert-warning alert-dismissible">
          {this.renderButton()}
          <h4>
            <i class="icon fa fa-warning" /> {title}
          </h4>
          {message}
        </div>
      );
    } else if (type === "success") {
      return (
        <div class="alert alert-success alert-dismissible">
          {this.renderButton()}
          <h4>
            <i class="icon fa fa-check" /> {title}
          </h4>
          {message}
        </div>
      );
    } else {
      return <div>alert message!</div>;
    }
  }
}
