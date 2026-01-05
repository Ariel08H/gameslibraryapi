import React, { useMemo } from 'react'

const Carousel = ({games, setCategory, setLimit}) => {

  const genres = useMemo(() => {
    if(!games) return [];
    const allGenres = games.map(game=>game.genre);
    const newGenres = [...new Set(allGenres)];
    // (newGenres);
    return newGenres
  }, [games]);
  
  const chooseCategory = (genre)=>{
    setCategory(genre);
    setLimit(games.length)
  }

  return (
    <section className='carousel'>
      
      <div className='group'>
        {
          genres.map( (genre)=>(
            <div className='genreItem' key={genre} onClick={
              ()=>chooseCategory(genre)}> 
              {genre}
            </div>
          ))
        }

      </div>
      <div className='group' aria-hidden>
        {
          genres.map( (genre)=>(
            <div className='genreItem' key={genre}> 
              {genre}
            </div>
          ))
        }

      </div>

      </section>
  )
}

export default Carousel