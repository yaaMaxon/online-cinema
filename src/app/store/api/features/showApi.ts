import { RTKAPI } from "../api";

export const showApi = RTKAPI.injectEndpoints({
  endpoints: (builder) => ({
    genreShows: builder.query({
      query: () => `/genre/tv/list`
    }),
    trendingShows: builder.query({
      query: () => `/trending/tv/day`,
    }),
    airingTodayShows: builder.query({
      query: () => `/tv/airing_today?language=en-US&page=1`
    }),
    mustWatchesShows: builder.query({
      query: () => `/tv/top_rated?language=en-US&page=1`
    })
  }),
})

export const { useGenreShowsQuery, useTrendingShowsQuery, useAiringTodayShowsQuery, useMustWatchesShowsQuery } = showApi