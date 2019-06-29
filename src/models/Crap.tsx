import {User} from "./User";
import {Post} from "./Post";

export interface Crap {
  uuid: string
  post: Post
  user: User
  times: number
}
