/* eslint-disable no-console */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { getTags, ITag } from '../services/tags'

export const getTagsAsync = createAsyncThunk('tags/all', async () => {
  const response: AxiosResponse = await getTags()
  const data: Array<ITag> = response.data as Array<ITag>
  return data
})

export interface ITagState {
  list: Array<ITag>
  status: string
}

const initialState: ITagState = {
  list: [],
  status: 'idle',
}

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTagsAsync.pending, (state) => {
        const s = state
        s.status = 'pending'
      })
      .addCase(getTagsAsync.fulfilled, (state, { payload }) => {
        const s = state
        s.list = payload
        s.status = 'idle'
      })
      .addCase(getTagsAsync.rejected, (state, action) => {
        if (action.payload) {
          console.warn('rejected', action.payload)
        } else {
          console.warn('rejected', action.error.message)
        }
      })
  },
})

export default tagsSlice
