import axios, { AxiosResponse } from 'axios'

export interface IUser {
  avater: string
  id: string
  isFollowing: boolean
  name: string
  username: string
}

export interface IUsersRequest {
  page?: number
  pageSize?: number
  keyword?: string
}

export interface IUsersResponse {
  data: Array<IUser>
  page: number
  pageSize: number
  total: number
  totalPages: number
}

export function getUsers(params: IUsersRequest | undefined = undefined): AxiosResponse {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/users/all', {
    params,
  }) as unknown as AxiosResponse
}

export function getFriends(params: IUsersRequest | undefined = undefined): AxiosResponse {
  return axios.get('https://avl-frontend-exam.herokuapp.com/api/users/friends', {
    params,
  }) as unknown as AxiosResponse
}
