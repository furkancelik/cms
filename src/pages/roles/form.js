import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link, Redirect } from "react-router-dom";
import { UserRoleStore } from "../../stores";
import FormGroup from "../../components/FormGroup";

class RoleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} class="form-horizontal">
        <div class="box-body">
          <FormGroup
            validation={this.props.validation}
            value={UserRoleStore.getRoleName}
            label={"Grup Adı"}
            validate={{ required: "Grup Adı alanı boş bırakılamaz." }}
          >
            <input
              class="form-control"
              placeholder="Grup Adı"
              onChange={text => {
                UserRoleStore.setRoleName(text.target.value);
              }}
              value={UserRoleStore.getRoleName}
            />
          </FormGroup>
          <FormGroup value={UserRoleStore.getIsAdmin}>
            <div class="checkbox">
              <label>
                <input
                  type="checkbox"
                  onChange={e => {
                    UserRoleStore.setIsAdmin(e.target.checked);
                  }}
                  value={UserRoleStore.getIsAdmin}
                  checked={UserRoleStore.getIsAdmin}
                />
                Yönetim Paneli Erişimi
              </label>
            </div>
          </FormGroup>
        </div>
        {this.props.children}
      </form>
    );
  }
}

export default observer(RoleForm);
