import { User } from "../../models/interfaces";

export const type = "USER_ENTER_REQUEST";

export function userEnterRequestAction(auth: object, user: User) {
  return {
    type, auth, user,
  };
}
