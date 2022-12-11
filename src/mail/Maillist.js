import React from 'react';
import "./Maillist.css"

const Maillist = () => {
  return (
    <div className="mail">
        <h1 className="mailtitle"> save time, save money</h1>
        <span className="maildesc">signup and we'll  send the best deals for you</span>
        <div className="mailinputcontainer">
            <input type="text" className=""placeholder="your email"></input>
            <button>Subscribe</button>
            </div>
        
    </div>
  )
}

export default Maillist