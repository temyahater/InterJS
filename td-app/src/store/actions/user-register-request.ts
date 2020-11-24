import { User } from "../../models/interfaces";

const type = "USER_REGISTER_REQUEST";

export default function userRegisterRequsetAction(auth: object, user: User) {
  return {
    type, auth, user,
  };
}
