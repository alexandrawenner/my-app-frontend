import {useState} from 'react'

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
     <section>
      <form className='userform' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Add a User</h2>
          <label>Username</label>
          <input
             type='text' required id='name' name='name' onChange={handleChange} value={name}
          />
          <button type="submit" className="user-form-btn">Submit</button>
      </form>
     </section>
     
    );
  }
  
  export default UserForm;