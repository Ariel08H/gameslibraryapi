import React, { useMemo } from 'react';
import { useFetchGames } from '../hooks/useFetchGames.js';
import { Link, useNavigate } from 'react-router-dom';

const RandomGame = () => {
const {games, isLoading, error} = useFetchGames();
const navigate = useNavigate();

const ids = useMemo(() => {
    if(!games) return [];

    const allIds = games.map(game=>game.id);

    return allIds
  }, [games]);

const randomGame = () => {
    const random = Math.floor(Math.random() * ids.length);
    // console.log(random);
    navigate(`/game/${ids[random]}`);
}

 if(isLoading){
    return <h1>LOADING...</h1>
  }

   if(error){
    return <h1>error: {error.message}</h1>
  }


  return (

    <p onClick={randomGame} className='pointer'>
        <div>RandomGame</div>
    </p> 
  )
}

export default RandomGame