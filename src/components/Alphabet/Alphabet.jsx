import axios from 'axios'
import React, {useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'

export default function Alphabet() {
  const [alphabetGames, setalphabetGames] =useState([]);

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'sort-by': 'alphabetical'},
    headers: {
      'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setalphabetGames(response.data)
  }).catch(function (error) {
    console.error(error);
  });

  return (<>
  <div className="container">
        <div className='row g-4 py-4'>
        {alphabetGames.slice(0,30).map((item,index)=>
      <MediaItem key={index} item={item}/>)}
        </div>
       </div>
   
  </>
  )
}
