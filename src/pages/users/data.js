import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { UserStore } from "../../stores";
import DataTable from "../../components/DataTable/index";
import LoadingPage from "../../components/LoadingPage";
import AlertMessage from "../../components/AlertMessage";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    if (UserStore.getUsers.length < 1) {
      UserStore.fetch(
        () => {
          this.setState({ loading: false });
        },
        () => {
          this.setState({ loading: false });
        }
      );
    } else {
      this.setState({ loading: false });
    }
  }

  removeData(id) {
    UserStore.remove(
      id,
      () => {
        this.props.history.push("/roles", {
          alertMessage: {
            type: "success",
            title: "Başarılı!",
            message: "İşleminiz başarıyla gerçekleştirildi."
          }
        });
      },
      () => {
        this.props.history.push("/roles", {
          alertMessage: {
            type: "danger",
            title: "Hata!",
            message: "Bir hata meydana geldi ve işleminiz gerçekleştirilemedi."
          }
        });
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
            <li class="active">Kullanıcılar</li>
          </ol>
        </section>
        <section class="content container-fluid">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">
                <div class="box-header">
                  <h3 class="box-title">
                    <i class="fa fa-tag" /> Kullanıcılar
                  </h3>
                  <div class="pull-right box-tools">
                    <Link className={"btn btn-info btn-sm"} to="/user/create">
                      <i class="fa fa-plus" /> Yeni Ekle
                    </Link>
                  </div>
                </div>
                <div class="box-body">
                  <AlertMessage
                    data={
                      this.props.location.state &&
                      this.props.location.state.alertMessage
                    }
                  />
                  {this.state.loading ? (
                    <LoadingPage />
                  ) : (
                    <DataTable>
                      <thead>
                        <tr>
                          <th>E-Mail Adresi</th>
                          <th>Adı Soyadı</th>
                          <th>Grubu</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {UserStore.getUsers.map(user => (
                          <tr>
                            <td>{user.email}</td>
                            <td>{user.fullName}</td>
                            <td>{user.role.roleName}</td>
                            <td>
                              <Link
                                className={"btn btn-primary btn-sm"}
                                to={`/user/edit/${user.id}`}
                              >
                                <i class="fa fa-pencil" /> Düzenle
                              </Link>{" "}
                              <Link
                                className={"btn btn-danger btn-sm"}
                                to="#"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Silmek istediğinize eminmisniz?"
                                    )
                                  )
                                    this.removeData(user.id);
                                }}
                              >
                                <i class="fa fa-trash" /> Sil
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>E-Mail Adresi</th>
                          <th>Adı Soyadı</th>
                          <th>Grubu</th>
                          <th>İşlemler</th>
                        </tr>
                      </tfoot>
                    </DataTable>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default observer(User);
