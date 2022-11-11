import './App.css';
import {useEffect, useState} from "react"
import axios from "axios"

function App() {

const [name,setName]=useState('')
const [title,setTitle]=useState([])

async function fetchTitle(){
  axios.get('https://swapi.dev/api/films/')
  .then(function(response){
    setTitle(response.data.results)
  })
  .catch(function(error){
    console.log(error)
  })
}
useEffect(()=>{
  fetchTitle()
},[])

  return (
    <div className="App">
      <p> { name === 53 ? title.map( title => ( <p> {title.title} </p> )) : "type 5 "} </p>

      <input type="text" onKeyDown={(e)=>setName(e.keyCode)} />
    </div>
  );
}

export default App;
