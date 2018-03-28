import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <header class="main-header">{this.props.children}</header>;
  }
}
