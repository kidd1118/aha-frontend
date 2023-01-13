import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTags, ITag } from '../services/tags'

export const getTagsAsync = createAsyncThunk('tags', async () => {
  const data: Array<ITag> = await getTags()
  return data
})

export interface ITagState {
  list: Array<ITag>
  status: string
}

let initialState: ITagState = {
  list: [],
  status: 'idle',
}

const tagsSlice = createSlice({
  name: 'tags',
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
      .addCase(getTagsAsync.pending, () => {
        initialState = { status: 'pending', list: [] }
      })
      .addCase(getTagsAsync.fulfilled, (state, { payload }) => {
        initialState = { status: 'idle', list: payload }
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

export const { add, filter } = tagsSlice.actions
export default tagsSlice
