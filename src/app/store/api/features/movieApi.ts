import { RTKAPI } from "../api";

export const movieApi = RTKAPI.injectEndpoints({
  endpoints: (builder) => ({
    genreMovies: builder.query({
      query: () => `/genre/movie/list`
    }),
    trendingMovies: builder.query({
      query: () => `/trending/movie/day`,
    }),
    newMovies: builder.query({
      query: () => `/movie/now_playing?language=en-US&page=1`
    }),
    mustWatches: builder.query({
      query: () => `/movie/top_rated?language=en-US&page=1`
    })
  }),
})

export const { useGenreMoviesQuery, useTrendingMoviesQuery, useNewMoviesQuery, useMustWatchesQuery } = movieApi