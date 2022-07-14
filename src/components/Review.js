import { useState, useEffect } from 'react'
import './FilmDetails.css'

function Review( {review, handleDeleteReview, onUpdateReview} ) {
  const {review_body} = review
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(review_body)
  
  function handleShow() {
    setShow(!show)
  }

  function handleChange(e) {
    setEdit(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({review_body:edit}),
    })
    .then(res => res.json())
    .then(updatedReview => onUpdateReview(updatedReview))
    setEdit("")
  }


    return (
      <div className='individualReviews'>
        <p>{review_body}</p>
        <button onClick={handleShow}>Edit</button>
        <button className="delete-btn" onClick={() =>handleDeleteReview(review.id)}>Delete</button>
        <form className={show ? "display" : "hide"} onSubmit={handleSubmit}>
          <input type='text' required id='name' name='name' onChange={handleChange} value={edit}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Review;