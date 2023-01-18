import { configureStore } from '@reduxjs/toolkit'
import tagsSlice from './tags'
import usersSlice from './users'

const store = configureStore({
  reducer: {
    tags: tagsSlice.reducer,
    users: usersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
