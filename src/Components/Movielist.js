import React from 'react';

//component
import Moviecard from './Moviecard';
import './Movielist.css';

const Movielist=({movieData})=>{
    console.log(movieData)

    return(
        <div className='movielist'>
           {
            movieData.map((data,index)=>{
               return(
                <Moviecard
                key={index}
                image={data.image.original}
                season={data.season}
                name={data.name}/>
               ) 
            })
           }
        </div>
    );
}
export default Movielist;