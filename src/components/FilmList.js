import FilmListItem from "./FilmListItem";
function FilmList({ films }) {

    const allFilms = films
    .map(film => {
      return (
        <FilmListItem key={film.id} film={film}/>
      )
    })
    return (
      <div className="filmContainer">
        {allFilms}
      </div>
    );
  }
  
  export default FilmList;