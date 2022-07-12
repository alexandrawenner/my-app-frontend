function ReviewForm( {handleChange, handleSubmit, formData} ) {
    return (
      <div>
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
  
  export default ReviewForm;