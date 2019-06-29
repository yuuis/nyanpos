import {User} from "./User";

export interface Post {
  uuid: string
  message: string
  send_user: User
  receive_user: User
  points: number
}
