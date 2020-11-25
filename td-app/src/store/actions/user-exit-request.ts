import { History } from "history";

export const type = "USER_EXIT_REQUEST";

export function userExitRequestAction(auth: object, history: History) {
  return { type, auth, history };
}
