import React from 'react';
import "./Featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featureditem">
            <img src="https://media.istockphoto.com/id/174653419/photo/marble-stairway.webp?s=612x612&w=is&k=20&c=ddPJ994J9Xgjvse01jcVnjVHdAikH3NlZPTGs0ouEZQ=" alt="" className="featuredimg" />
       
        <div className="featuredtitles">
            <h1>Royal palace</h1>
            <h2>123 properties</h2>
        </div>
     </div>
     <div className="featureditem">
            <img src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="featuredimg" />
       
        <div className="featuredtitles">
            <h1>Indian palace</h1>
            <h2>123 BRown plaa</h2>
        </div>
     </div>

     <div className="featureditem">
            <img src="https://media.istockphoto.com/id/174653419/photo/marble-stairway.webp?s=612x612&w=is&k=20&c=ddPJ994J9Xgjvse01jcVnjVHdAikH3NlZPTGs0ouEZQ=" alt="" className="featuredimg" />
       
        <div className="featuredtitles">
            <h1>Real plaza hotel</h1>
            <h2>58 east</h2>
        </div>
     </div>
     

    </div>
  )
}

export default Featured