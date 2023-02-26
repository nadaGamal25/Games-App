import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    let allparams= useParams()
    const [itemDetails ,setItemDetails] =useState({})

    useEffect(()=>{
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: `${allparams.x}`},
        headers: {
          'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
        setItemDetails(response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.error(error);
      });   
    },[])


  return (
    <>
    <div className="container">
    <div className="row p-5">
        <div className="col-md-4">
          <div>
          <img src={itemDetails.thumbnail} className='w-100' alt="gameimg" />
          <div className='py-3'>
            <button className='btn btn-secondary disabled'>Free</button>
            <a className='btn btn-primary mx-1' href={itemDetails.game_url} target='-blank'>PLAY NOW <i className="fa-solid fa-arrow-right-from-bracket ms-2"></i></a>
          </div>
          </div>
       
        </div>
        <div className="col-md-8">
            <div className='caption-details'>
            <h2>{itemDetails.title}</h2>
            <p className="text-muted py-2">{itemDetails.short_description}</p>
            {itemDetails.minimum_system_requirements?<div>
            <h3 className='text-muted'>minimum system requirements</h3>
            <h4>graphics: {itemDetails.minimum_system_requirements.graphics}</h4>
            <h4>memory: {itemDetails.minimum_system_requirements.memory}</h4>
            <h4>os: {itemDetails.minimum_system_requirements.os}</h4>
            <h4>processor: {itemDetails.minimum_system_requirements.processor}</h4>
            <h4>storage: {itemDetails.minimum_system_requirements.storage}</h4>
            </div>:''}
            
            <h5 className='text-muted pt-4'>Global Screenshots</h5>  
            {itemDetails.screenshots?<img src={itemDetails.screenshots[0].image} className='w-100' alt="" />:''}

            <h3 className='py-4 text-muted'>Additional Information</h3>
            <div className="row">
            <div className="col-md-4">
                <div>
              <span className="text-muted">Title</span>
              <h6 className="text-muted">{itemDetails.title}</h6>
              </div>
              </div>
              <div className="col-md-4">
                <div>
              <span className="text-muted">Developer</span>
              <h6 className="text-muted">{itemDetails.developer}</h6>
              </div>
              </div>
              <div className="col-md-4">
                <div>
              <span className="text-muted">Publisher</span>
              <h6 className="text-muted">{itemDetails.publisher}</h6>
              </div>
              </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
