 import './Nav.css'
 import { useEffect, useState } from 'react'
 import {NavLink} from 'react-router-dom'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>

        <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/A24_logo.svg"
            alt="a24 logo" />

        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/films">
            Films
          </NavLink>
          <NavLink exact to="/user/new">
            Register
          </NavLink>
        </nav>

        

        <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt='netflix avatar' />

    </div>
    )
}

export default Nav