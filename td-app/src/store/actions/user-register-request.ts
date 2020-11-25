import { User } from "../../models/interfaces";

export const type = "USER_REGISTER_REQUEST";

export function userRegisterRequestAction(auth: object, user: User) {
  return {
    type, auth, user,
  };
}
