const API_KEY = '2a3b7a6da264a4f9fa92db74f0c456dc';

export const getTrending = async () => {
  const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  const trending = await fetch(API_URL);

  return await trending.json();
};

export const getMovieDetails = async movie_id => {
  const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

  const movie = await fetch(API_URL);

  return await movie.json();
};

export const searchMovie = async query => {
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  const movie = await fetch(API_URL);

  return await movie.json();
};
export const getMovieCast = async movie_id => {
  const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;

  const cast = await fetch(API_URL);

  return await cast.json();
};

export const getMovieReview = async movie_id => {
  const API_URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`;

  const review = await fetch(API_URL);

  return await review.json();
};
