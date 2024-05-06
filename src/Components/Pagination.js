import React from 'react';
import './Pagination.css';

const Pagination=({totalpost,postperpage,setcurrentpage,currentpage})=>{

      let pages=[]
      for(let i=1;i<=Math.ceil(totalpost/postperpage);i++){
        pages.push(i)
      }
    return(
        <div className='pagination'>
             {
                pages.map((page,index)=>{
                   return(
                    <button onClick={()=>setcurrentpage(page)}
                    className={page===currentpage?'active':""}>{page}</button>
                   ) 
                })
              
             }
        </div>
    );
}
export default Pagination;