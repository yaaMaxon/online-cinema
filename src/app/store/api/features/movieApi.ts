import { RTKAPI } from "../api";

export const movieApi = RTKAPI.injectEndpoints({
  endpoints: (builder) => ({
    genreMovies: builder.query({
      query: () => `/genre/movie/list`
    }),
     trendingMovies: builder.query({
      query: () => `/trending/movie/day`,
    }),
  }),
})

export const { useGenreMoviesQuery, useTrendingMoviesQuery } = movieApi