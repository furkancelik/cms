import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import { UserRoleStore } from "../../stores";
import FormGroup from "../../components/FormGroup";
import RoleForm from "./form";

class RoleCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: false,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const { getRoleName, getIsAdmin } = UserRoleStore;

    if (getRoleName === "") {
      this.setState({ loading: false, validation: true });
    } else {
      UserRoleStore.create(
        () => {
          this.setState({ loading: false });
          this.props.history.push("/roles", {
            alertMessage: {
              type: "success",
              title: "Başarılı!",
              message: "İşleminiz başarıyla gerçekleştirildi."
            }
          });
        },
        () => {
          this.setState({ loading: false });
          this.props.history.push("/roles", {
            alertMessage: {
              type: "danger",
              title: "Hata!",
              message:
                "Bir hata meydana geldi ve işleminiz gerçekleştirilemedi."
            }
          });
        }
      );
    }
  }

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
                    <i class="fa fa-tag" /> Kullanıcı Grupları
                  </h3>
                </div>

                <RoleForm
                  handleSubmit={this.handleSubmit}
                  validation={this.state.validation}
                >
                  <div class="box-footer">
                    <Link className={"btn btn-default"} to="/roles">
                      İptal Et
                    </Link>
                    <button
                      type="submit"
                      class="btn btn-success pull-right"
                      disabled={this.state.loading}
                    >
                      Kaydet
                    </button>
                  </div>
                </RoleForm>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default observer(RoleCreate);
