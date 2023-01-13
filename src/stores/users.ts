import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, IUsersResponse, getUsers } from '../services/users'

export const getUsersAsync = createAsyncThunk('users/all', async () => {
  const response: IUsersResponse = await getUsers()
  console.log('response', response)
  return response.data
})

export interface IUserState {
  list: Array<IUser>
  status: string
}

let initialState: IUserState = {
  list: [],
  status: 'idle',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      initialState.list.push(payload)
    },
    filter: (state, action) => {
      const tag = state.list.filter((item) => item === action.payload)
      initialState.list = tag && tag.length ? tag : []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersAsync.pending, () => {
        initialState = { status: 'pending', list: [] }
      })
      .addCase(getUsersAsync.fulfilled, (state, { payload }) => {
        initialState = { status: 'idle', list: payload }
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

export const { add, filter } = usersSlice.actions
export default usersSlice
