const type = "USER_UPDATE";

export default function userAction(user: string) {
  return { type, user };
}
