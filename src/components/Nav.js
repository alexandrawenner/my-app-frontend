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

        <img
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt='netflix avatar' />

        <nav>
          <div>
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
    </div>
    )
}

export default Nav