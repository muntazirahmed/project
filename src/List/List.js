import React,{useState} from 'react';
import {format,setDate} from "date-fns"
import "./List.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Searchitem from '../Searchitem/Searchitem'
import {useLocation} from 'react-router-dom';
import { DateRange } from 'react-date-range';

const List = () => {
  const location=useLocation();
  const[destination,setdestination]=useState(location.state.destination)
  const[date,setdate]=useState(location.state.date)
  const[options,setoptions]=useState(location.state.options)
  
  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className="listcontainer">
      <div className="listwrapper">
        <div className="listsearch">
          <h1 className="listtitle">Search</h1>
          <div className="listitem">
            <label>Destination</label>
            <input type="text" className=""/>
          </div>

          <div className="lsitem">
            <label>Check-in Date</label>
            <span>{`${format(date[0].startdate, "MM/dd/yyyy")} to ${format(date[0].enddate, "MM/dd/yyyy")}`}</span>
            <DateRange onChange={item=>setDate([item.selection])}/>
          </div>
<div className="lsitem">
  <label>Options</label>
  <div className="lsoptionitem">
    <span className="lsoptiontext">min price<small>Per night</small>
    </span>
    <input type="number" className="lsoptioninput"></input>
  </div>

  <div className="lsoptionitem">
    <span className="lsoptiontext">min price<small>Per night</small>
    </span>
    <input type="number" className="lsoptioninput"></input>
  </div>

  <div className="lsoptionitem">
    <span className="lsoptiontext">max price<small>Per night</small>
    </span>
    <input type="number" className="lsoptioninput"></input>
  </div>

  <div className="lsoptionitem">
    <span className="lsoptiontext">Adult
    </span>
    <input type="number" min={1} className="lsoptioninput" placeholder={options.adult}></input>
  </div>

  <div className="lsoptionitem">
    <span className="lsoptiontext">Children
    </span>
    <input type="number" min={0} className="lsoptioninput" placeholder={options.children}></input>
  </div>

  <div className="lsoptionitem">
    <span className="lsoptiontext">Rooms
    </span>
    <input type="number" min={1} className="lsoptioninput" placeholder={options.room}></input>
  </div>
</div>
<button >Search</button>
        </div>
        <div className="listresult">
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>
          <Searchitem/>

        </div>
      </div>
    </div>
 </div>
  )
}

export default List