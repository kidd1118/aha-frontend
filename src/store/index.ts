import { configureStore } from '@reduxjs/toolkit'
import tagsSlice from './tags'
import usersSlice from './users'
import friendsSlice from './friends'
import resultsSlice from './results'

const store = configureStore({
  reducer: {
    tags: tagsSlice.reducer,
    users: usersSlice.reducer,
    friends: friendsSlice.reducer,
    results: resultsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
