import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUser, IUsersResponse, getUsers } from '../services/users'

export const getUsersAsync = createAsyncThunk('users', async () => {
  console.log('response')
  const response: IUsersResponse = await getUsers()
  console.log('response', response)
  return response.data
})

export interface IUserState {
  list: Array<IUser>
  status: 'loading' | 'idle'
}

export const initialState: IUserState = {
  list: [
    {
      avater: 'https://cdn.fakercloud.com/avatars/vitorleal_128.jpg',
      id: '756e84ff-1366-4e17-88dd-a2fa8bebd791',
      isFollowing: false,
      name: 'Edwardo Langworth',
      username: 'Lorine_Zboncak',
    },
  ],
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
        initialState.status = 'loading'
      })
      .addCase(getUsersAsync.fulfilled, (state, { payload }) => {
        console.log('addCase')
        initialState.status = 'idle'
        initialState.list = payload
      })
  },
})

export const { add, filter } = usersSlice.actions
export default usersSlice
