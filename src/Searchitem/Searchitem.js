import React from 'react';
import './Searchitem.css'

const Searchitem = () => {
  return (
    <div className="searchitem">
        <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp" alt=""
        className="siimg" />
        <div className="sidesc">
            <h1  className="sititle">india gate apartment</h1>
            <span className="sidistance">500 m from railway station</span>
            <span className="sisubtitle" >
                studio apartment  with aircondition
            </span>
            <span  className="sifeatures">
                Hall +1 bathroom + 2 bed room and 1 kitchen
            </span>
            <span className="sicancelop"> free cancellation</span>

        </div>
        <div className="sidetails" >
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
        </div>
    </div>
  )
}

export default Searchitem