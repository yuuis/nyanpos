import uuid from "uuid";
import {GeneralState} from "../models/GeneralState";
import {User} from "../models/User";
import {Post} from "../models/Post";
import {Crap} from "../models/Crap";

const initialUsers: User[] = [
  {
    uuid: uuid.v4.toString(),
    name: 'クロ',
    image_url: 'https://4.bp.blogspot.com/-RjoXyQHx4Ak/UnyGN4WF7fI/AAAAAAAAadU/HsABLjETKSM/s400/neko_ushiro.png',
    points: 400,
  },
  {
    uuid: uuid.v4.toString(),
    name: 'ぶち',
    image_url: 'https://2.bp.blogspot.com/-OJI1nrtWGpY/UnyGKzzKl4I/AAAAAAAAacY/9xIDbTNbQ9Y/s400/neko_furikaeri.png',
    points: 400,
  },
  {
    uuid: uuid.v4.toString(),
    name: 'トラ',
    image_url: 'https://4.bp.blogspot.com/-nzGNxI1lJsc/UnyGMotWQxI/AAAAAAAAadA/1NeQYPIZCmk/s400/neko_punch.png',
    points: 400,
  },
  {
    uuid: uuid.v4.toString(),
    name: 'ミケ',
    image_url: 'https://3.bp.blogspot.com/-I5omlyOiw04/W1vg2o3hHgI/AAAAAAABNr4/_PpEM8ZROX42aTaNNZQK2_p2JT7Bfp8zgCLcBGAs/s400/animal_chara_computer_neko.png',
    points: 400,
  },
];

const initialPosts: Post[] = [];
const initialCraps: Crap[] = [];

export const initialGeneralState: GeneralState = {
  posts: initialPosts,
  users: initialUsers,
  craps: initialCraps,
  currentUser: initialUsers[0]
};

export type GeneralState = typeof initialGeneralState

export interface Action {
  type: string
  user?: User
  post?: Post
  crap?: Crap
}
