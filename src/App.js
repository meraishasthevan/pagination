
import { useEffect, useState } from 'react';
import './App.css';
import Moviecard from './Components/Moviecard.js';
import Movielist from './Components/Movielist.js';
import Pagination from './Components/Pagination.js';

//axios
import axios from 'axios';

//Bootstrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function App() {
         
   const [movieData,setMovieData]=useState([])
   const [currentpage,setcurrentpage]=useState(1)
   const [postperpage,setpostperpage]=useState(8)
   const [search,setSearch]=useState("")
   const lastpostindex=currentpage*postperpage
   const firstpostindex=lastpostindex-postperpage
//  const currentpost=movieData.slice(firstpostindex,lastpostindex)

   useEffect(()=>{
       getIntial()
   },[])
      
    const getIntial=async()=>{
     axios.get("https://api.tvmaze.com/shows/1/episodes")
     .then((response)=>{
      console.log(response.data)
      setMovieData(response.data)
     }).catch((error)=>{
      console.log("Error in Fetching data",error)
     })
   }
   const handleSearch=event=>{
    const{value}=event.target;
    setSearch(value)
   }

   const filteredData=search? movieData.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
     :movieData.slice(firstpostindex,lastpostindex)

  return (
    <div>
      <h1 style={{backgroundColor:'blue',textAlign:'center',color:'white'}}>Movie List</h1>
      <form style={{width:'60%',margin:'auto',marginTop:'50px'}}>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Search Movie Name" value={search} onChange={handleSearch} />
          </InputGroup>
      </form>
      <Movielist movieData={filteredData}/>
      <Pagination totalpost={movieData.length}
         postperpage={postperpage}
         setcurrentpage={setcurrentpage}
         currentpage={currentpage}/>
    </div>
  );
}

export default App;
