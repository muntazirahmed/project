import React from 'react';
import "./Home.css"
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Featured from "../featured/Featured"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecontainer">
            <Featured/>
            
        </div>
</div>
  )
}

export default Home