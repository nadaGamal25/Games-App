import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeItem({item}) {
  return (<>
    <div className="col-md-4">
        <Link to={`/itemdetails/${item.id}`}>
        <div className="game position-relative">
          <div>
            <img src={item.thumbnail} className='w-100' />
           
          </div>
          <div className='caption-geme p-3'> 
          <div className="d-flex justify-content-between py-1">
            <h3 className='h4 my-2'>{item.title}</h3>
            <button className='btn btn-primary'><Link>FREE</Link></button> 
          </div>          
            </div>      
        </div>
        </Link>
    </div>

    
  </>
  )
}
