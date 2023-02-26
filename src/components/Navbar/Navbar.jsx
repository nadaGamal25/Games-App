import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from './logo (1).png'

export default function Navbar({userData ,logout}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg py-3">
  <div className="container">
    <Link className="navbar-brand">
      <img src={logo1} className='logo' alt="logo" />Game Over
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
          </li>
          <li>  
          <Link className="nav-link" to='all'>All</Link>
          </li>
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='pc'>PC</Link></li>
            <li><Link className="dropdown-item" to='browser'>Browser action</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort-by
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="date">release-date</Link></li>
            <li><Link className="dropdown-item" to="popularity">popularity</Link></li>
            <li><Link className="dropdown-item" to="alphabet">alphabetical</Link></li>
            <li><Link className="dropdown-item" to="relevance">relevance</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="racing">racing</Link></li>
            <li><Link className="dropdown-item" to="sports">sports</Link></li>
            <li><Link className="dropdown-item" to="shooter">shooter</Link></li>
            <li><Link className="dropdown-item" to="zombie">zombie</Link></li>
            <li><Link className="dropdown-item" to="all">others</Link></li>
          </ul>
        </li>
                       
      </ul>:''}

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        
         
        {
          userData?<>
          <li>
          <Link onClick={logout} className="nav-link sign-brdr" to='login'>Logout</Link>
          </li>      
          </>:<>
          <li className="nav-item">
          <Link className="nav-link" to='login'>Login</Link>
          </li>
        <li> 
          <Link className="nav-link sign-brdr" to='register'>Join Free</Link>
        </li>
          </>
        }          
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
