import Title from '../components/Title'
import Carousel from '../components/Carousel'
import GameList from '../components/GameList'
import React, { useEffect, useMemo, useState } from 'react'
import { useFetchGames } from '../hooks/useFetchGames.js'


const Homepage = () => {
  const [limit, setLimit] = useState(4);
  const [category, setCategory] = useState('');

  const {games, isLoading, error} = useFetchGames();

  const filteredGames = useMemo(()=>{
    if(!category || category === '') return games;

    return games.filter((game)=>game.genre===category);
  },[category, games]);

  if(isLoading){
    return <h1>LOADING...</h1>
  }

   if(error){
    return <h1>error: {error.message}</h1>
  }

  const handleToggleGames = () => {
    if (category) {
      setCategory('');
      setLimit(4);
      return;
    }
    if (limit === games.length) {
      setLimit(4);
    } else {
      setLimit(games.length);
    }
  };

  return (
    <main className='center'>
      <Title>
        Free-to-play {category} games 
      </Title>

      <Carousel games={games} setCategory={setCategory} setLimit={setLimit}/>

      <GameList games={filteredGames} limit={limit}></GameList> 

      {
        games.length > 4 &&
        (
        <button onClick={handleToggleGames}>
          {category || limit !== games.length ? 'Show all Games' : 'Show Less'}
        </button>
        )
      }
      
      
    

    </main>
  )
}

export default Homepage