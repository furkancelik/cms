import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          Bu bir{" "}
          <Link to="#">
            <strong>SW Bilişim</strong>
          </Link>{" "}
          Ürünüdür
        </div>
        Tüm hakkı saklıdır. &copy; 2018
      </footer>
    );
  }
}
