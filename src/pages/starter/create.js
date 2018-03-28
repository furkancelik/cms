import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Role extends Component {
  render() {
    return (
      <div>
        <section class="content-header">
          <h1>Kullanıcı Grupları</h1>
          <ol class="breadcrumb">
            <li>
              <Link to="#">
                <i class="fa fa-dashboard" /> Yönetim Paneli
              </Link>
            </li>
            <li>
              <Link to="#">Kullanıcı İşlemleri</Link>
            </li>
            <li>
              <Link to="#">Kullanıcı Grupları</Link>
            </li>
            <li class="active">Yeni Grup Ekle</li>
          </ol>
        </section>
        <section class="content container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">
                    <i class="fa fa-tag" /> Tablo başlığı
                  </h3>
                  <div class="pull-right box-tools">
                    <Link className={"btn btn-info btn-sm"} to="/role/create">
                      Yeni Ekle
                    </Link>{" "}
                    <button class="btn btn-primary btn-sm">Yeni Ekle</button>{" "}
                    <button class="btn btn-success btn-sm">Yeni Ekle</button>
                  </div>
                </div>
                <form class="form-horizontal">
                  <div class="box-body">
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Adınız</label>
                      <div class="col-sm-10">
                        <input class="form-control" placeholder="Adınız" />
                      </div>
                    </div>
                  </div>
                  <div class="box-footer">
                    <Link className={"btn btn-default"} to="/role">
                      Geri
                    </Link>
                    <button class="btn btn-info pull-right">Giriş Yap</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
