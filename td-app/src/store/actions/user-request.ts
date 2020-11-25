export const type = "USER_REQUEST";

export function userRequestAction(auth: object) {
  return { type, auth };
}
