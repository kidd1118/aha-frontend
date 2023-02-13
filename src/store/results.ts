/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { IUser, IUsersResponse, getUsers, IUsersRequest } from '../services/users'

export const getResultsAsync = createAsyncThunk(
  'results/all',
  async (params: IUsersRequest | undefined = undefined) => {
    const response: AxiosResponse = await getUsers(params)
    const data: IUsersResponse = response.data as IUsersResponse
    return data.data
  }
)

export interface IResultState {
  list: Array<IUser>
  status: string
}

const initialState: IResultState = {
  list: [],
  status: 'idle',
}

const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    clear: (state) => {
      const s = state
      s.list.length = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResultsAsync.pending, (state) => {
        const s = state
        s.status = 'pending'
      })
      .addCase(getResultsAsync.fulfilled, (state, { payload }) => {
        const s = state
        s.list = s.list.length > 0 ? s.list.concat(payload) : payload
        s.status = 'idle'
      })
      .addCase(getResultsAsync.rejected, (state, action) => {
        if (action.payload) {
          console.warn('rejected', action.payload)
        } else {
          console.warn('rejected', action.error.message)
        }
      })
  },
})

export const { clear } = resultsSlice.actions
export default resultsSlice
