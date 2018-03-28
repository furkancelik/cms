import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import { UserStore } from "../../stores";
import FormGroup from "../../components/FormGroup";
import Form from "./form";
import validate from "./validate";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: false,
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    UserStore.setForm(this.props.match.params.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const { getFullName, getEmail, getRole } = UserStore;

    validate(
      () => {
        UserStore.update(
          this.props.match.params.id,
          () => {
            this.setState({ loading: false });
            this.props.history.push("/users", {
              alertMessage: {
                type: "success",
                title: "Başarılı!",
                message: "İşleminiz başarıyla gerçekleştirildi."
              }
            });
          },
          () => {
            this.setState({ loading: false });
            this.props.history.push("/users", {
              alertMessage: {
                type: "danger",
                title: "Hata!",
                message:
                  "Bir hata meydana geldi ve işleminiz gerçekleştirilemedi."
              }
            });
          }
        );
      },
      () => {
        this.setState({ loading: false, validation: true });
      }
    );
  }

  render() {
    return (
      <div>
        <section class="content-header">
          <h1>Kullanıcılar</h1>
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
              <Link to="#">Kullanıcılar</Link>
            </li>
            <li class="active">Kullanıcı Düzenle</li>
          </ol>
        </section>
        <section class="content container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">
                    <i class="fa fa-tag" /> Kullanıcı Düzenle
                  </h3>
                </div>
                <Form
                  handleSubmit={this.handleSubmit}
                  validation={this.state.validation}
                >
                  <div class="box-footer">
                    <Link className={"btn btn-default"} to="/users">
                      İptal Et
                    </Link>
                    <button
                      type="submit"
                      class="btn btn-success pull-right"
                      disabled={this.state.loading}
                    >
                      Düzenle
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default observer(UserEdit);
