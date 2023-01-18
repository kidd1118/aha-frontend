import axios, { AxiosResponse } from 'axios'

export interface IUser {
  avater: string
  id: string
  isFollowing: boolean
  name: string
  username: string
}

export interface IUsersResponse {
  data: Array<IUser>
  page: number
  pageSize: number
  total: number
  totalPages: number
}

export function getUsers(
  page: number = 1,
  pageSize: number = 10,
  keyword: string = ''
): AxiosResponse {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/users/all', {
    params: {
      page,
      pageSize,
      keyword,
    },
  }) as unknown as AxiosResponse
}
