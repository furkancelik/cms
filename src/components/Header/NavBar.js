import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-static-top" role="navigation">
        <Link
          to="#"
          className={"sidebar-toggle"}
          data-toggle="push-menu"
          role="button"
        >
          <span class="sr-only">Toggle navigation</span>
        </Link>

        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li class="user user-menu">
              <Link to="#">
                <img
                  src="/assets/images/avatar-1.png"
                  class="user-image"
                  alt="User Image"
                />
                <span class="hidden-xs">
                  Hoşgeldin <strong>Furkan Çelik!</strong>
                </span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fa fa-power-off" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
