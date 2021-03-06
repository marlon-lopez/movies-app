import React, { useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar';
//pages
import Details from './pages/Details';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Search from './pages/Search';
import Discover from './pages/Discover';
import { useAppDispatch } from './features/store';
import { fetchGenres } from './features/discoverSlice';
import Favorites from './pages/Favorites';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, []);
  return (
    <Router>
      <main className='flex w-full min-h-screen overflow-x-hidden bg-gray-700 md:flex-row mr-32'>
        <NavBar />
        <div className='w-full  flex flex-col overflow-auto bg-primary-blue'>
          <SearchBar />
          <Route path='/' exact component={Home} />
          <Route path='/movie/:id' exact component={Details} />
          <Route path='/movie/category/:category' component={Movies} exact />
          <Route path='/movie' component={Movies} exact />
          <Route path='/tv' component={TvShows} exact />
          <Route path='/tv/:id' component={Details} exact />
          <Route path='/tv/category/:category' component={TvShows} exact />
          <Route path='/search/:query' component={Search} exact />
          <Route path='/tv/discover/:genreId' component={Discover} exact />
          <Route path='/movie/discover/:genreId' component={Discover} exact />
          <Route path='/favorites' component={Favorites} exact />
        </div>
      </main>
    </Router>
  );
};

export default App;
