import {User} from "../models/User";
import {Post} from "../models/Post";
import {Crap} from "../models/Crap";

export interface GeneralState {
  users: User[]
  posts: Post[]
  craps: Crap[]
  currentUser: User
}
