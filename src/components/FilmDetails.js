import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './FilmDetails.css'
import YouTube from 'react-youtube'

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
   .then((resp) => resp.json())
   .then(newReview => setReviews([...reviews, newReview]))
  
  
  setFormData({
    name: "",
    review_body: ""
  });
}

function handleDeleteReview(id) {
  const deleteReview = reviews.filter((review) => review.id !== id)
  setReviews(deleteReview) 
  fetch(`http://localhost:9292/reviews/${id}`, {
      method:'DELETE'
    })
}

function onUpdateReview(updatedReview) {
  const updatedReviews = reviews.map(review => {
    if(review.id === updatedReview.id) {
      return updatedReview
    } else {
      return review
    }
  }); 
  setReviews(updatedReviews)
}

const { id } = useParams();
const [isLoaded, setIsLoaded] = useState(false)
//get requests
useEffect(() => {
  fetch(`http://localhost:9292/films/${id}`)
  .then((r) => r.json())
  .then(film => {
    setFilm(film);
    setIsLoaded(true)
})
}, [id])

useEffect(() => {
  fetch(`http://localhost:9292/films/${id}/reviews`)
  .then((r) => r.json())
  .then((reviews) => setReviews(reviews))
}, [id])

if (!isLoaded) return <h2>Loading...</h2>

const { title, year, runtime, rotten_tomatoes_score, director, starring, synopsis, critics_consensus, image_url, trailer, genre } = film


const opts = {
  height: '600',
  width: '40%',
  playerVars: {
      // https://developers.google.com/youtube/player_parameters
  },
};



    return (
      
      <div className="filmDetailsDiv">
        <div>
          <YouTube videoId={trailer.slice(32, 43)} opts={opts}/>
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
        {reviews.map(review => <Review key={review.id} review={review} handleDeleteReview={handleDeleteReview} onUpdateReview={onUpdateReview} />)}
        <ReviewForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
      </div>
    );
  }
  
  export default FilmDetails;