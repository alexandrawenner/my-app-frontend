import './App.css';
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './components/Home';
import Header from './components/Header';
import FilmList from './components/FilmList';
import UserForm from './components/UserForm';
import FilmDetails from './components/FilmDetails'


function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/films')
    .then(res => res.json())
    .then(films => setFilms(films))
  }, [])

  return (
    <div className="App">
      <Header />
       <Switch>
          <Route exact path="/">
            <Home films={films}/>
          </Route>
          <Route exact path="/films">
            <FilmList films={films}/>
          </Route>
          <Route exact path="/user/new">
            <UserForm />
          </Route>
          <Route path="/films/:id">
            <FilmDetails />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
