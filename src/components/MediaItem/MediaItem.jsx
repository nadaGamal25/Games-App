import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({item}) {
  return (<>
    <div className="col-xl-3 col-lg-4 col-md-6">
        <Link to={`/itemdetails/${item.id}`}>
        <div className="game position-relative">
          <div>
            <img src={item.thumbnail} className='w-100' />
           
          </div>
          <div className='caption-geme p-3'> 
          <div className="d-flex justify-content-between py-1">
            <h3 className='h4 my-2'>{item.title.slice(0,7)}.. {item.name}</h3>
            <div>
            <button className='btn btn-primary'><Link>FREE</Link></button> 
            </div>
          </div>
          <p className='text-muted'>{item.short_description.slice(0,20)}...</p>   
          <div className="d-flex justify-content-between">
          <i className="fa-solid fa-plus text-muted"></i>
          <div>
          
          <span className='text-muted'>{item.genre}</span>
          <i className="fa-brands fa-windows text-muted"></i>
          </div>
          </div>
            </div>      
        </div>
        </Link>
    </div>

    
  </>
  )
}
