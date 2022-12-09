import React from 'react';
import {faBed,faPlane,faCar,faTaxi,faPerson,faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <div className="headercontainer">
        <div className="headerlist">
            <div className="headerlistitem active">
            <FontAwesomeIcon icon={faBed}/>
            <span>stays</span>
            </div>
            <div className="headerlistitem ">
            <FontAwesomeIcon icon={faPlane}/>
            <span>Flights</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faCar}/>
            <span>Car rentals</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed}/>
            <span>Attractions</span>
            </div>
            <div className="headerlistitem">
            <FontAwesomeIcon icon={faBed}/>
            <span>Airport Taxis</span>
            </div>
        </div>
        <h1 className="headertitle">A LIFEtime Discount ?? Its really cheaaaper</h1>
        <p className="headerdisc">
            Get REWARD FOR YOUR travel..unlock instant savings of  10% or get the free account with free cancellation
        </p>
        <button className="headerbtn"> Sign in / Register</button>
        <div className="headersearch">
            <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed}/>
            <input type="text"
             placeholder="where are you going"
              className="headersearchinput"/>
              </div>
              
              <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendarDays}/>
            <span className="headersearchtext">Date to Date</span>
              </div>
            

              <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson}/>
            <span className="headersearchtext"> 2 Adults 2 Children 1 Room</span>
           </div>

           <div className="headersearchitem">
      
           <button className="headerbtn"> search</button>
           
              </div>

        </div>
        </div>
    </div>
  )
}

export default Header