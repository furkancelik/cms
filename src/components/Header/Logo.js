import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  render() {
    return (
      <Link to="#" className={"logo"}>
        <span class="logo-mini">
          Y<b>P</b>
        </span>
        <span class="logo-lg">
          Yönetim<b>Paneli</b>
        </span>
      </Link>
    );
  }
}
