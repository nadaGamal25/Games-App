import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MediaItem from '../MediaItem/MediaItem'

export default function All() {

  const [allGames, setAllGames] =useState([]);

  async function getAllGames(){
    const res = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/games`,
      {
        headers: {
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68'
        }
      }
    );
    setAllGames(res.data)
  };

  useEffect(()=>{
   getAllGames()
  }, []);

  return (<>
       <div className="container">
        <div className='row g-4 py-4'>
        {allGames.slice(0,50).map((item,index)=>
      <MediaItem key={index} item={item}/>)}
       <div>
       <button className='btn btn-outline-info'>More Games</button>

       </div>
        </div>
       </div>
      </>
  )
}
