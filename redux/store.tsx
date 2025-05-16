import { configureStore } from '@reduxjs/toolkit'
import creatorReducer from './creatorSlice'

export const store = configureStore({
  reducer: {
    creator: creatorReducer,
  },
})

export const makeStore = () => {
  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>

export default store
