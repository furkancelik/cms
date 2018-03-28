import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Logo from "../components/Header/Logo";
import NavBar from "../components/Header/NavBar";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Footer from "../components/Footer";

// import AlertMessage from "../components/AlertMessage";

//Pages
import Home from "../pages/home";
//Role Pages
import { Role, RoleCreate, RoleEdit } from "../pages/roles";
import { User, UserCreate, UserEdit } from "../pages/users";

const routers = [
  //Home
  { exact: true, path: "/", component: Home },
  //Role
  { exact: true, path: "/roles", component: Role },
  { exact: false, path: "/role/create", component: RoleCreate },
  { exact: false, path: "/role/edit/:id", component: RoleEdit },
  //User
  { exact: true, path: "/users", component: User },
  { exact: false, path: "/user/create", component: UserCreate },
  { exact: false, path: "/user/edit/:id", component: UserEdit }
];

const Root = () => (
  <BrowserRouter>
    <div class="wrapper">
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <SideBar />
      <Content>
        {routers.map(route => (
          <Route
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Content>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Root;
