import React,{useState} from 'react';
import {faBed,faPlane,faCar,faTaxi,faPerson,faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './Header.css';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
  const[destination,setdestination]=useState({})
  const[opendate,setopendate]=useState(false)
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const[openoptions,setopenoptions]=useState(false);
  const[options,setoptions]=useState({
    adult:1,
    children:0,
    room:1,
  });
 const navigate=useNavigate();

  const handleoption =(name,operation)=>{
    setoptions(prev =>{return {
      ...prev,[name]:operation === "i" ? options[name] + 1 : options[name] -1,
    }})
  }

 const handlesearch =()=>{
navigate("/hotels",{state :{destination,date,options}})
 }





  return (
    <div className="header">
        <div className={type === "list" ? "headercontainer list" : "headercontainer"}>
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
      
      {type !== "list" && <> <h1 className="headertitle">A LIFEtime Discount ?? Its really cheaaaper</h1>
        <p className="headerdisc">
            Get REWARD FOR YOUR travel..unlock instant savings of  10% or get the free account with free cancellation
        </p>
        <button className="headerbtn"> Sign in / Register</button>
        <div className="headersearch">
            <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed}/>
            <input type="text"
             placeholder="where are you going"
              className="headersearchinput"
              onChange={e=>setdestination(e.target.value)}/>
              </div>

              
              <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendarDays}  className="headericon"/>
            <span onClick={()=>setopendate(!opendate)} className="headersearchtext">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              </div>
            

              {opendate && <DateRange
                   editableDateInputs={true}
                   onChange={item => setdate([item.selection])}
                   moveRangeOnFirstSelection={false}
                   ranges={date}
                   className="date"
                 />}  




              <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson}/>
            <span  onClick={()=>setopenoptions(!openoptions)} className="headersearchtext"> {`${options.adult} adult- ${options.children} children - ${options.room} room`}</span>
            {openoptions && <div className="options" >
              <div className="optionitem">
                <span className="optiontext">Adult</span>
                <div className="optioncounter">
                 <button
                  disabled={options.adult<=1}
                 
                 className="optioncounterbutton" onClick={()=>handleoption("adult" ,"d")}>-</button>
                <span className="optioncounternumber">{options.adult}</span>
                <button className="optioncounterbutton"  onClick={()=>handleoption("adult" ,"i")}>+</button>
                </div>
               
              </div>

              <div className="optionitem">
                <span className="optiobtext">Children</span>
              <div className="optioncounter">
                <button 
                 disabled={options.children <=0}
                className="optioncounterbutton"  onClick={()=>handleoption("children","d")}>-</button>
                <span className="optioncounternumber">{options.children}</span>
                <button className="optioncounterbutton"  onClick={()=>handleoption("children","i")}>+</button>
              </div>
             </div>

              <div className="optionitem">
                <span className="optiobtext">Room</span>
              <div className="optioncounter">
                <button 
                disabled={options.room <=1}
                className="optioncounterbutton"  onClick={()=>handleoption("room","d")}>-</button>
                <span className="optioncounternumber">{options.room}</span>
                <button className="optioncounterbutton"  onClick={()=>handleoption("room","i")}>+</button>
              </div>
              </div>
            </div>
            }
           </div>

           <div className="headersearchitem">
      
           <button className="headerbtn"  onClick={handlesearch}> search</button>
           
              </div>

        </div>
       
      </> }
       
        </div>
    </div>
  )
}

export default Header