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
    }),
    getShowDetails: builder.query({
      query: (showId) => `/tv/${showId}`
    }),
    getShowCast: builder.query({
      query: (movieId) => `/tv/${movieId}/credits?language=en-US`
    }),
    getShowReviews: builder.query({
      query: (movieId) => `/tv/${movieId}/reviews?language=en-US&page=1`
    }),
    getShowsByGenresId: builder.query({
      query: ({ genresId, page }) =>
       `/discover/tv?with_genres=${genresId}&page=${page}&sort_by=popularity.desc`,
    }),
  }),
})

export const { 
  useGenreShowsQuery, 
  useTrendingShowsQuery, 
  useAiringTodayShowsQuery, 
  useMustWatchesShowsQuery,
  useGetShowDetailsQuery,
  useGetShowCastQuery,
  useGetShowReviewsQuery,
  useGetShowsByGenresIdQuery } = showApi