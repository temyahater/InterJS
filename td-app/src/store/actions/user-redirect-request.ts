import { History } from "history";

const type = "USER_REDIRECT_REQUEST";

export default function userRedirectRequsetAction(history: History, url: string) {
  return { type, history, url };
}
