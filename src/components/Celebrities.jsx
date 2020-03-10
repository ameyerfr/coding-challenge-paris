import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Celebrities() {
  const apiK = 'b764771141b6d869e9bd2a293c20c8f0';
  const [celebs, setCelebs] = useState([]);
  const [selectedCeleb, setSelected] = useState(null)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/popular?page=1&api_key=${apiK}`)
      .then(res => {
        console.log(res.data)
        setCelebs(res.data.results)
      }).catch(err => console.log(err))

    return () => {};
  }, [])

  const getCeleb = (e) => {
    const clickedEL = e.target;
    const celebCardEL = clickedEL.closest('.celeb-card');
    const celebID = parseInt(celebCardEL.getAttribute('data-id'));

    const celebObject = celebs.filter(c => c.id === celebID)

    if( celebObject && celebObject.length > 0) {
      displayCelebDetails(celebObject[0]);
      setSelected(celebObject[0]);
    }
  };

  const displayCelebDetails = (celeb) => {

  }

  return (
    <div className="c-celebrities">

      <h1>Celebrities</h1>

      <div className="celeb-w">

        <div className="celeb-list">
        {celebs.map((c, i) => (
          <div key={i} className="celeb-card" data-id={c.id} onClick={getCeleb}>
            <img src={`https://image.tmdb.org/t/p/w185${c.profile_path}`} alt={c.name} />
            <span className={!!selectedCeleb && selectedCeleb.id === c.id ? "highlight" : ""}>{c.name}</span>
          </div>
        ))}
        </div>

        <div className="celeb-details">
          {!!selectedCeleb && (
            <>
            <img src={`https://image.tmdb.org/t/p/w185${selectedCeleb.profile_path}`} alt={selectedCeleb.name} />
            <h2>{selectedCeleb.name}</h2>
            <h3>Known for :</h3>
            {selectedCeleb.known_for.map((movie, k) => (
              <div key={k}>
                <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                <h4>{movie.title}</h4>
              </div>
            ))}
            </>
          )}
        </div>

      </div>

    </div>
  )
}
