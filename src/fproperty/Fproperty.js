import React from 'react';
import  './Fproperty.css'

const Fproperty = () => {
  return (
    <div className="Fp">
        <div className="fpitem"> 
       <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp"
        className="fpimage" alt=""/>
       <span className="fpname"> Hotel royal garden</span>
       <span className="fpcity"> kolkata</span>
       <span className="fpprice"> 1000</span>
       <div className="fprating">
        <button>8.2</button>
        <span>Excellent</span>
       </div>
    </div>

    <div className="fpitem"> 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFeJOt8D3qSghzJN01IoZL7_OzhcsNNC-tQ&usqp=CAU"
        className="fpimage" alt=""/>
       <span className="fpname"> Hotel hayat garden</span>
       <span className="fpcity"> kolata</span>
       <span className="fpprice"> 2000</span>
       <div className="fprating">
        <button>8.2</button>
        <span>Excellent</span>
       </div>
    </div>

    <div className="fpitem"> 
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFeJOt8D3qSghzJN01IoZL7_OzhcsNNC-tQ&usqp=CAU"
        className="fpimage" alt=""/>
       <span className="fpname"> Hotel Dream</span>
       <span className="fpcity"> durgapur</span>
       <span className="fpprice"> 1500</span>
       <div className="fprating">
        <button>8.2</button>
        <span>Excellent</span>
       </div>
    </div>
     
 


    </div>
  )
}

export default Fproperty