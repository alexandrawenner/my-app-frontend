import FilmListItem from "./FilmListItem";
function FilmList({ films }) {

    const allFilms = films
    .map(film => {
      return (
        <FilmListItem key={film.id} film={film}/>
      )
    })
    return (
      <section>
        <div>
          {allFilms}
        </div>
      </section>
    );
  }
  
  export default FilmList;