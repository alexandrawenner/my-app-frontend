import {useState} from 'react'
import './UserForm.css'

function UserForm() {
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:9292/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({name:name}),
  })
  setName("")
  }

    return (
     <section className='registerSection'>
      <div className='userDiv'>
      <form className='userform' autoComplete='off' onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
          <p>If you'd like to submit a review, please register below, and make sure to remember your username.</p>
          <p> Please don't register more than once.</p>
          <input
             type='text' required id='name' name='name' onChange={handleChange} value={name} placeholder="USERNAME"
          />
          <button type="submit" className="user-form-btn">SUBMIT</button>
      </form>
      </div>
     </section>
     
    );
  }
  
  export default UserForm;