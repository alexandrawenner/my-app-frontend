import { NavLink } from "react-router-dom";

function FilmListItem({ film }) {

  const { id, title, year, runtime, rotten_tomatoes_score, director, starring, synopsis, critics_consensus, image_url, trailer, genre } = film

    return (
      <div>
        <NavLink to={`/films/${id}`}>
          <img src={image_url} alt="filmPoster"/>
        </NavLink>
        {title}
        {year}
        <p>Runtime: {runtime}min.</p>
        <p>Director: {director}</p>
        <p>Starring: {starring}</p>
        <p>Critics Consensus: {critics_consensus}</p>
        <p>Synopsis: {synopsis}</p>
        <p>Genre: {genre}</p>
        {rotten_tomatoes_score}%
      </div>
    );
  }
  
  export default FilmListItem;