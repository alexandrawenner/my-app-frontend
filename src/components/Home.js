import FilmThumbnail from "./FilmThumbnail";

function Home( { films } ) {

  const comedies = films
  .filter(film => film.genre.includes("comedy"))
  .map(film => <FilmThumbnail key={film.id} film={film}/>)

  const drama = films
  .filter(film => film.genre.includes("drama"))
  .map(film => <FilmThumbnail key={film.id} film={film}/>)

  const horror = films
  .filter(film => film.genre.includes("horror"))
  .map(film => <FilmThumbnail key={film.id} film={film}/>)

  const thriller = films
  .filter(film => film.genre.includes("thriller"))
  .map(film => <FilmThumbnail key={film.id} film={film}/>)

    return (
      <div>
        <div>Comedies: {comedies}</div>
        <div>Drama: {drama}</div>
        <div>Horror: {horror}</div>
        <div>Thriller: {thriller}</div>
      </div>
    );
  }
  
  export default Home;