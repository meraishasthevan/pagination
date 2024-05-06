import React from 'react';
import './Moviecard.css';
 
const Moviecard=({name,image,season})=>{
    return(
        <div className='card'>
          <div className='cardimg'>
           <img src={image} alt=""/>
           </div>
           <h2>MoiveName: {name}</h2>
           <h2>Season: {season}</h2>
        </div>
    );
}
export default Moviecard;