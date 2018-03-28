import { observable, computed, action, decorate, toJS } from "mobx";
import { getApi, postApi, error } from "../configs/api";

class User {
  users = [];

  fullName = "";
  email = "";
  password = "";
  role = "";

  setForm(id) {
    const role = this.getRoles.find(role => role.id === id);
    this.roleName = role.roleName;
    this.isAdmin = role.isAdmin;
  }

  formClear() {
    this.roleName = "";
    this.isAdmin = false;
  }

  get getRoleName() {
    return this.roleName;
  }

  get getIsAdmin() {
    return this.isAdmin;
  }

  setRoleName(roleName) {
    this.roleName = roleName;
  }

  setIsAdmin(isAdmin) {
    this.isAdmin = isAdmin;
  }

  get getUsers() {
    return toJS(this.users);
  }

  setUsers(user) {
    this.users = user;
  }

  async fetch(success, failure) {
    try {
      const query = `query={allRoles{id,roleName,isAdmin}}`;
      const responseData = await getApi(query);
      if (responseData.errors) {
        if (failure) failure();
        error(responseData.errors);
      } else {
        if (success) success();
        this.roles = responseData.data.allRoles || [];
      }
    } catch (e) {
      if (failure) failure();
      error(e);
    }
  }

  async create(success, failure) {
    const query = `mutation($roleName:String, $isAdmin: Boolean) {
                      createRole(roleName: $roleName, isAdmin: $isAdmin){
                        id,roleName,isAdmin}
                   }`;
    const variables = {
      roleName: this.roleName,
      isAdmin: this.isAdmin
    };

    try {
      const responseData = await postApi(JSON.stringify({ query, variables }));
      if (responseData.errors) {
        if (failure) failure();
        error(responseData.errors);
      } else {
        this.roles.unshift(responseData.data.createRole);
        if (success) success();
        this.formClear();
      }
    } catch (e) {
      if (failure) failure();
      error(e);
    }
  }

  async update(id, success, failure) {
    const query = `mutation($id:ID!,$roleName:String, $isAdmin: Boolean) {
                      updateRole(id:$id,roleName: $roleName, isAdmin: $isAdmin){
                        id,roleName,isAdmin}
                   }`;
    const variables = {
      id,
      roleName: this.roleName,
      isAdmin: this.isAdmin
    };

    try {
      const responseData = await postApi(JSON.stringify({ query, variables }));
      if (responseData.errors) {
        if (failure) failure();
        error(responseData.errors);
      } else {
        const role = responseData.data.updateRole;
        this.roles.map(item => {
          if (item.id === role.id) {
            item.roleName = role.roleName;
            item.isAdmin = role.isAdmin;
          }
        });
        this.formClear();
        if (success) success();
      }
    } catch (e) {
      if (failure) failure();
      error(e);
    }
  }

  async remove(id, success, failure) {
    const query = `mutation($id:ID!){removeRole(id:$id)}`;
    const variables = { id };
    try {
      const responseData = await postApi(JSON.stringify({ query, variables }));
      if (responseData.errors) {
        if (failure) failure();
        error(responseData.errors);
      } else {
        if (responseData.data.removeRole) {
          this.roles = this.roles.filter(role => role.id !== id);
          if (success) success();
        } else {
          if (failure) failure();
        }
      }
    } catch (e) {
      if (failure) failure();
      error(e);
    }
  }
}

decorate(User, {
  roles: observable,
  roleName: observable,

  getRoleName: computed,
  setRoleName: action,

  getIsAdmin: computed,
  setIsAdmin: action,
  formClear: action,

  setForm: action,

  isAdmin: observable,
  setRoles: action,
  create: action,
  getRoles: computed,
  fetch: action
});

export default new User();
