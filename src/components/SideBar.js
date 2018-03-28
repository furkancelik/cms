import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const MenuLink = ({
  children,
  label,
  to,
  activeOnlyWhenExact,
  icon,
  submenu
}) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match, location: { pathname } }) =>
      children ? (
        <li
          className={
            match || (submenu && submenu.indexOf(pathname) >= 0)
              ? "treeview menu-open active"
              : "treeview"
          }
        >
          <Link to={to}>
            {icon && <i class={icon} />} <span>{label}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right" />
            </span>
          </Link>
          <ul class="treeview-menu">{children}</ul>
        </li>
      ) : (
        <li className={match ? "active" : ""}>
          <Link to={to}>
            {icon && <i class={icon} />} <span>{label}</span>
          </Link>
        </li>
      )
    }
  />
);

export default class SideBar extends Component {
  render() {
    return (
      <aside class="main-sidebar">
        <section class="sidebar">
          <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Menü</li>
            <MenuLink
              activeOnlyWhenExact={true}
              to="/"
              label="Yönetim Paneli"
              icon="fa fa-dashboard"
            />
            <li>
              <Link to="#" target="_blank">
                <i class={"fa fa-globe"} /> <span>Siteyi Önizle</span>
              </Link>
            </li>
            <MenuLink
              to="/settings"
              label="Genel Yapılandırma"
              icon="fa fa-cog"
            />
            <MenuLink to="/analytics" label="İstatistikler" icon="fa fa-cog" />
            <MenuLink
              to="#"
              label="Sayfalar"
              icon="fa fa-files-o"
              submenu={["/masterpage", "/slavepage", "/pages"]}
            >
              <MenuLink
                to="/masterpage"
                label="Ön Sayfa Yöneticisi"
                icon="fa fa-cog"
              />
              <MenuLink
                to="/slavepage"
                label="İçerik Sayfa Yöneticisi"
                icon="fa fa-cog"
              />
              <MenuLink to="/pages" label="Sayfalar" icon="fa fa-cog" />
            </MenuLink>
            <MenuLink
              to="/block"
              label="Blok Yöneticisi"
              icon="fa fa-th-large"
            />
            <MenuLink
              to="/content"
              label="İçerik Yöneticisi"
              icon="fa fa-pencil-square-o"
            />
            <MenuLink
              to="/content"
              label="Bileşenler"
              icon="fa fa-puzzle-piece"
            />
            <MenuLink to="/araclar" label="Araçlar" icon="fa fa-star" />
            <MenuLink
              to="/components"
              label="Eklentiler"
              icon="fa fa-dropbox"
            />
            <MenuLink
              to="#"
              label="Kullanıcı İşlemleri"
              icon="fa fa-users"
              submenu={["/users", "/role", "/permitted-page"]}
            >
              <MenuLink to="/users" label="Kullanıcılar" icon="fa fa-user" />
              <MenuLink
                to="/roles"
                label="Kullanıcı Grupları"
                icon="fa fa-users"
              />
              <MenuLink
                to="#"
                label="Sayfa Erişim Seviyesi"
                icon="fa fa-users"
              />
            </MenuLink>

            <MenuLink to="/logout" label="Çıkış Yap" icon="fa fa-power-off" />
          </ul>
        </section>
      </aside>
    );
  }
}
