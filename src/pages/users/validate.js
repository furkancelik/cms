import { UserStore } from "../../stores";
const validator = require("email-validator");

export default (success, failure) => {
  const { getFullName, getEmail, getRole } = UserStore;
  if (getFullName === "" || getEmail === "" || !validator.validate(getEmail)) {
    if (failure) failure();
  } else {
    if (success) success();
  }
};
