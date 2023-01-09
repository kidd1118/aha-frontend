import axios from 'axios'

export interface ITag {
  count: number
  id: string
  name: string
}

export function getTags(): Array<ITag> {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/tags') as unknown as Array<ITag>
}
