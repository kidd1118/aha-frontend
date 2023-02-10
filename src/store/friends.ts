/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { IUser, IUsersResponse, getFriends, IUsersRequest } from '../services/users'

export const getFriendsAsync = createAsyncThunk(
  'users/friends',
  async (params: IUsersRequest | undefined = undefined) => {
    const response: AxiosResponse = await getFriends(params)
    const data: IUsersResponse = response.data as IUsersResponse
    return data.data
  }
)

export interface IFriendState {
  list: Array<IUser>
  status: string
}

const initialState: IFriendState = {
  list: [],
  status: 'idle',
}

const friendsSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriendsAsync.pending, (state) => {
        const s = state
        s.status = 'pending'
      })
      .addCase(getFriendsAsync.fulfilled, (state, { payload }) => {
        const s = state
        s.list = payload
        s.status = 'idle'
      })
      .addCase(getFriendsAsync.rejected, (state, action) => {
        if (action.payload) {
          console.warn('rejected', action.payload)
        } else {
          console.warn('rejected', action.error.message)
        }
      })
  },
})

export default friendsSlice
