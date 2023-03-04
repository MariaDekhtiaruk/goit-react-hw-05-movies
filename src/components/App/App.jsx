import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import Home from 'pages/Home';
// import Movies from 'pages/MoviePage/Movies';
// import { NotFound } from 'pages/NotFound';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import CastDetails from 'components/CastReview/Cast';
import MovieReview from 'components/CastReview/Reviews';

import { Container, Link, Header } from './App.styled';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/MoviePage/Movies'));
const NotFound = lazy(() => import('../../pages/NotFound'));

const Suspended = ({ children }) => (
  <Suspense fallback={<div>Loading page...</div>}>{children}</Suspense>
);

function App() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route
          path="/"
          element={
            <Suspended>
              <Home />
            </Suspended>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspended>
              <Movies />
            </Suspended>
          }
        ></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastDetails />} />
          <Route path="reviews" element={<MovieReview />} />
        </Route>
        <Route
          path="*"
          element={
            <Suspended>
              <NotFound />
            </Suspended>
          }
        />
      </Routes>
    </Container>
  );
}
export default App;
