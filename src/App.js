import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

import Home from './components/Home';
import FilmList from './components/FilmList';
import UserForm from './components/UserForm';
import FilmDetails from './components/FilmDetails'
import Nav from "./components/Nav";


function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/films')
    .then(res => res.json())
    .then(films => setFilms(films))
  }, [])

  return (
    <div className="App">
      <Nav />
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
