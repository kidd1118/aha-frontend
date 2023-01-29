/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { IUser, IUsersResponse, getUsers, getFriends, IUsersRequest } from '../services/users'

export const getUsersAsync = createAsyncThunk(
  'users/all',
  async (params: IUsersRequest | undefined = undefined) => {
    const response: AxiosResponse = await getUsers(params)
    const data: IUsersResponse = response.data as IUsersResponse
    return data.data
  }
)

export const getFriendsAsync = createAsyncThunk('users/friends', async () => {
  const response: AxiosResponse = await getFriends()
  const data: IUsersResponse = response.data as IUsersResponse
  return data.data
})

export interface IUserState {
  list: Array<IUser>
  status: string
}

const initialState: IUserState = {
  list: [],
  status: 'idle',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, (state) => {
        const s = state
        s.status = 'pending'
      })
      .addCase(getUsersAsync.fulfilled, (state, { payload }) => {
        const s = state
        s.list = payload
        s.status = 'idle'
      })
      .addCase(getUsersAsync.rejected, (state, action) => {
        if (action.payload) {
          console.warn('rejected', action.payload)
        } else {
          console.warn('rejected', action.error.message)
        }
      })
  },
})

export default usersSlice
