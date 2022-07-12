import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import ReviewForm from "./ReviewForm";
import Review from "./Review"

function FilmDetails() {

const [film, setFilm] = useState([])
const [formData, setFormData] = useState({
  name: "",
  review_body: ""
})
const [reviews, setReviews] = useState([])

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

useEffect(() => {
  fetch(`http://localhost:9292/films/${id}/reviews`)
  .then((r) => r.json())
  .then((reviews) => setReviews(reviews))
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
        <h2>User Reviews</h2>
        {reviews.map(review => <Review key={review.id} review={review}/>)}
        <ReviewForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
      </div>
    );
  }
  
  export default FilmDetails;