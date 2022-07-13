import React, { useState, useEffect } from 'react'
import './Banner.css'

function Banner() {

    const [isLoaded, setIsLoaded] = useState(false)
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/films')
        .then(res => res.json())
        .then(films => {
            setFilms(films);
            setIsLoaded(true)
        })
      }, [])

      if (!isLoaded) return <h2>Loading...</h2>

      const randomFilm = films[Math.floor(Math.random() * films.length)]

      function truncate(str, n) {
          return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    return (
        <header className='banner'
             style={{
                backgroundSize: "cover",
                backgroundImage: `url("${randomFilm.image_url}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner__contents'>
                <h1 className="banner__title">
                    {randomFilm.title}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__btn">Play</button>
                    <button className="banner__btn">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(randomFilm.synopsis, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner