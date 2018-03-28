import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return <div class="content-wrapper">{this.props.children}</div>;
  }
}
