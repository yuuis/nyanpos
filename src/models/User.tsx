export interface User {
  uuid: string
  name: string
  image_url: string
  points: number
  receive_points: number
}

export const initUser = {
  uuid: '',
  name: '',
  image_url: '',
  points: 0,
  receive_points: 0
};
