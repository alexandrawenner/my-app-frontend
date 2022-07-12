import {NavLink} from 'react-router-dom'

function Header() {
    return (
      <header >
        <nav>
          <div className="navbar">
          <NavLink exact className="button" to="/">
            Home
          </NavLink>
          <NavLink exact className="button" to="/films">
            Films
          </NavLink>
          <NavLink exact className="button" to="/user/new">
            User Form
          </NavLink>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;