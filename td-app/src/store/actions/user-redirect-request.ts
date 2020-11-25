import { History } from "history";

export const type = "USER_REDIRECT_REQUEST";

export function userRedirectRequestAction(history: History, url: string) {
  return { type, history, url };
}
