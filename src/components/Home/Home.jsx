import axios from 'axios'
import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import HomeItem from '../HomeItem/HomeItem'

export default function Home() {

  const [popularityGames, setpopularityGames] =useState([]);

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'sort-by': 'popularity'},
    headers: {
      'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setpopularityGames(response.data)
  }).catch(function (error) {
    console.error(error);
  });

  return (<>
  <div className="caption-home text-center">
    <div className="overlay-caption py-5">
    <h1 className='pt-4'>Find & track the best <span className='h1'>free-to-play</span> games!</h1>
    <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!<br/>
    Watch all you want, whenever you want.</p>
    <button className='browseBtn mb-4'>
      <Link to='all'>Browse Games</Link>
    </button>
    </div>
  </div>
  <div className='p-5'>
    <h2><i class="fa-solid fa-robot fa-1x"></i>  Personalized Recommendations</h2>
    <div className='row g-4 p-4'>
    
    {popularityGames.slice(0,3).map((item,index)=>
      <HomeItem key={index} item={item}/>)}
        </div>
  </div>
    

  </>)
}
