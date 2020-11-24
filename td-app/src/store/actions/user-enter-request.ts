import { User } from "../../models/interfaces";

const type = "USER_ENTER_REQUEST";

export default function userEnterRequsetAction(auth: object, user: User) {
  return {
    type, auth, user,
  };
}
