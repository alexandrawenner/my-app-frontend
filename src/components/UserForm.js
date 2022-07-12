import {useState} from 'react'

function UserForm() {
  const [userData, setUserData] = useState({
    name: ""
  })

  const handleUserChange = (e) => {
    
  }

  const handleUserSubmit = () => {

  }
    return (
     <section>
      <form className='userform' autoComplete='off' onSubmit={handleUserSubmit}>
        <h2>Add a User</h2>
          <label>Username</label>
          <input
             type='text' required id='name' name='name' onChange={handleUserChange} value={userData.name}
          />
      </form>
     </section>
     
    );
  }
  
  export default UserForm;