const type = "USER_REQUEST";

export default function userRequsetAction(auth: object) {
  return { type, auth };
}
