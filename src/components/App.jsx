import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import CastDetails from 'pages/Cast';
import MovieReview from 'pages/Reviews';
import { NotFound } from 'pages/NotFound';
import { Container, Link } from './App.styled';

function App() {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastDetails />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}
export default App;
