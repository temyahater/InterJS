import { History } from "history";

const type = "USER_EXIT_REQUEST";

export default function userExitRequsetAction(auth: object, history: History) {
  return { type, auth, history };
}
