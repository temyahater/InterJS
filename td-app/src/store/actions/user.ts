export const typeUser = "USER_UPDATE";

export function userAction(user: string) {
  return { type: typeUser, user };
}
