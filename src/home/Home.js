import React from 'react';
import "./Home.css"
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Featured from "../featured/Featured";
import Propertylist from '../Property/Propertylist';
import Fproperty from '../fproperty/Fproperty';
import Maillist from "../mail/Maillist";
import Footer from '../footer/Footer'




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecontainer">
            <Featured/>
            <h1 className="hometitle">Browse by property type</h1>
            <Propertylist/>
            <h1 className="hometitle">Browse by property type</h1>
           <Fproperty/>
           <Maillist/>

           <Footer/>
      
        </div>
</div>
  )
}

export default Home