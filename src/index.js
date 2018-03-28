import React from "react";
import ReactDOM from "react-dom";

import Router from "./configs/router";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "ionicons/dist/css/ionicons.min.css";
import "admin-lte/dist/css/AdminLTE.min.css";
import "admin-lte/dist/css/skins/skin-blue.min.css";

import jQuery from "jquery";
window.jQuery = jQuery;
require("bootstrap/dist/js/bootstrap.min.js");
require("admin-lte/dist/js/adminlte.min.js");

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
