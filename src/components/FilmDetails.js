import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function FilmDetails() {

const [film, setFilm] = useState([])
const [formData, setFormData] = useState({
  name: "",
  review_body: ""
})

function handleChange(e){
  const { name, value } = e.target
  setFormData({...formData, [name]: value})
}

function handleSubmit(e){
  e.preventDefault();

  fetch(`http://localhost:9292/films/${id}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
  // .then((resp) => resp.json())
  // .then()

  setFormData({
    name: "",
    review_body: ""
  });
}

const { id } = useParams();

useEffect(() => {
  fetch(`http://localhost:9292/films/${id}`)
  .then((r) => r.json())
  .then((film) => setFilm(film))
}, [id])

const { title, year, runtime, rotten_tomatoes_score, director, starring, synopsis, critics_consensus, image_url, trailer, genre } = film

    return (
      <div>
        <div>
          <img src={image_url} alt="filmPoster"/>
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

        <form onSubmit={handleSubmit}>

          <h2>Feel free to add your own review!</h2>

          <div> 
            <input type="text" id="name" placeholder="Reviewer..." name="name" value={formData.name} onChange={handleChange}/>
          </div>

          <div> 
            <textarea id="review_body" name="review_body" placeholder="Write something.." value={formData.review_body} onChange={handleChange} style={{height:200}}></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default FilmDetails;