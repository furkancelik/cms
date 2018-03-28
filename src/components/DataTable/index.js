import React, { Component } from "react";

import $ from "jquery";
import "datatables.net-bs/css/dataTables.bootstrap.css";
import "datatables.net-bs/js/dataTables.bootstrap.js";

$(function() {
  $("#example1").DataTable();
});

export default class DataTable extends Component {
  render() {
    return (
      <table id="example1" class="table table-bordered table-hover">
        {this.props.children}
      </table>
    );
  }
}
