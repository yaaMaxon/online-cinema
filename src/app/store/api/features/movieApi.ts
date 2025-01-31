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
    }),
    getMovieDetails: builder.query({
      query: (movieId) => `/movie/${movieId}`
    }),
    getMovieCast: builder.query({
      query: (movieId) => `/movie/${movieId}/credits?language=en-US`
    }),
    getMovieReviews: builder.query({
      query: (movieId) => `/movie/${movieId}/reviews?language=en-US&page=1`
    }),
    getMoviesByGenresId: builder.query({
      query: ({ genresId, page }) =>
       `/discover/movie?with_genres=${genresId}&page=${page}&sort_by=popularity.desc`,
    }),
    getSearchedMovies: builder.query({
      query: (query) => `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    }),
  }),
})

export const { 
  useGenreMoviesQuery, 
  useTrendingMoviesQuery, 
  useNewMoviesQuery, 
  useMustWatchesQuery, 
  useGetMovieDetailsQuery, 
  useGetMovieCastQuery,
  useGetMovieReviewsQuery,
  useGetMoviesByGenresIdQuery, 
  useGetSearchedMoviesQuery } = movieApi