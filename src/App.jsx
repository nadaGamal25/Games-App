import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './index.css'
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Offline} from "react-detect-offline";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import All from './components/All/All'
import Pc from './components/Pc/Pc'
import Browser from './components/Browser/Browser'
import Date from './components/Date/Date'
import ItemDetails from './components/ItemDetails/ItemDetails';
import Popularity from './components/Popularity/Popularity'
import Alphabet from './components/Alphabet/Alphabet'
import Relevance from './components/Relevance/Relevance'
import Racing from './components/Racing/Racing'
import Sports from './components/Sports/Sports'
import Shooter from './components/Shooter/Shooter'
import Zombie from './components/Zombie/Zombie'



function App() {

  useEffect(()=>{
    if(localStorage.getItem('userToken') !== null){
      saveUserData();
    }
  },[])

  const [userData, setuserData] = useState(null)

  function saveUserData(){
    let encodedToken =localStorage.getItem('userToken')
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setuserData(decodedToken)
  }

  let routers =createBrowserRouter([
    {path:'/', element:<Layout setuserData={setuserData} userData={userData}/>,children:[
      {index: true ,element:<ProtectedRoute userData={userData}> <Home/></ProtectedRoute>},
      {path:'all',element:<ProtectedRoute userData={userData}><All/></ProtectedRoute>},
      {path:'pc',element:<ProtectedRoute userData={userData}><Pc/></ProtectedRoute> },
      {path:'browser',element:<ProtectedRoute userData={userData}><Browser/></ProtectedRoute>},
      {path:'itemdetails/:x',element:<ProtectedRoute userData={userData}><ItemDetails/></ProtectedRoute>},
      {path:'date',element:<ProtectedRoute userData={userData}><Date/></ProtectedRoute>},
      {path:'popularity',element:<ProtectedRoute userData={userData}><Popularity/></ProtectedRoute>},
      {path:'alphabet',element:<ProtectedRoute userData={userData}><Alphabet/></ProtectedRoute>},
      {path:'relevance',element:<ProtectedRoute userData={userData}><Relevance/></ProtectedRoute>},
      {path:'racing',element:<ProtectedRoute userData={userData}><Racing/></ProtectedRoute>},
      {path:'sports',element:<ProtectedRoute userData={userData}><Sports/></ProtectedRoute>},
      {path:'shooter',element:<ProtectedRoute userData={userData}><Shooter/></ProtectedRoute>},
      {path:'zombie',element:<ProtectedRoute userData={userData}><Zombie/></ProtectedRoute>},
      {path:'login',element:<Login saveUserData={saveUserData}/>},
      {path:'register' ,element:<Register/>}
    ]}  
  ])

  return (<>
  <div>
    <Offline><div className="offline">you are offline</div></Offline>
  </div>
    <RouterProvider router={routers}/>
    
  
</> 
  );
}

export default App;
