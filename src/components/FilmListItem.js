import { NavLink } from "react-router-dom";
import './FilmList.css'

function FilmListItem({ film }) {

  const { id, title, year, runtime, rotten_tomatoes_score, director, starring, synopsis, critics_consensus, image_url, trailer, genre } = film

    return (
      <div className="film-li-info">
        <NavLink to={`/films/${id}`}>
          <img className="film-li-image" src={image_url} alt="filmPoster"/>
        </NavLink>
            <section className="film-li-heading">
              {title}
              ({year})
              <img className="rotten-tomato" src="https://911media.com/wp-content/uploads/2017/10/rotten-tomatoes-logo.png" alt="rottenTomatoLogo"/>{rotten_tomatoes_score}%
            </section>
          
            <section className="film-body-details">
              <p><b>Runtime:</b> {runtime}min.</p>
              <p><b>Director:</b> {director}</p>
              <p><b>Starring:</b> {starring}</p>
              <p><b>Critics Consensus:</b> {critics_consensus}</p>
              <p><b>Synopsis:</b> {synopsis}</p>
              <p><b>Genre:</b> {genre}</p>
              
            </section>
          
      </div>
    );
  }
  
  export default FilmListItem;