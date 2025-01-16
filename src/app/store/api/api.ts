import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const RTKAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3', 
    prepareHeaders: (headers) => {
    headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGM2MjA4ODhjMjI1ODEwOTliY2Q1ZTQ1NTUwYzk1YyIsIm5iZiI6MTY5ODQzNTg3OC42MjgsInN1YiI6IjY1M2MxMzI2NTY0ZWM3MDBlNWZhNDJkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LQLrahi9NTMj3VrZ5bSm6oS8J_oS2vMrS2rf2IE168c')
    
    return headers
  } }),
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: () => `/info`,
    }),
  }),
})