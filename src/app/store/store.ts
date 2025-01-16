import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slices/movieSlice'
import { RTKAPI } from './api/api'

export const makeStore = () => {
  return configureStore({
    reducer: {
        movie: movieReducer,
    [RTKAPI.reducerPath]: RTKAPI.reducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RTKAPI.middleware),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

