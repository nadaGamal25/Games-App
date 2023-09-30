import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem'

export default function Pc() {

  const [pcGames, setPcGames] =useState([]);

  useEffect(()=>{
   
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {platform: 'pc'},
  headers: {
    'X-RapidAPI-Key': 'cf0d9cd16cmshd3e4b81858b75edp1c7f9bjsn772cfe12d6c8',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

    axios.request(options).then(function (response) {
      setPcGames(response.data)
    }).catch(function (error) {
      console.error(error);
    });
      }, []);
 



  return (<>
  <div className="container">
        <div className='row g-4 py-4'>
        {pcGames.slice(0,30).map((item,index)=>
      <MediaItem key={index} item={item}/>)}
        </div>
       </div>
   
  </>
  )
}

