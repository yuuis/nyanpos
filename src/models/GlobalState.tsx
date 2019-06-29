import {User} from "./User";
import {Post} from "./Post";
import {Crap} from "./Crap";

export interface GlobalState {
  users: User[]
  posts: Post[]
  craps: Crap[]
  currentUser: User
}
