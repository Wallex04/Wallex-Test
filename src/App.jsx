import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [getData, setGetData] = useState(0)
  const [item, setItem] = useState(0)


  function getValues() {
    fetch("https://dummyjson.com/products/")
    .then((response) =>{
      return response.json();     
    })
    .then(text) 
    setGetData(text)
    console.log(text)
  }
getValues()

useEffect(()=>{
getValues()
},[item]);




return (

  <div className='App'>

    <div className="image">

      <h1>{getData.title}</h1>

      <img src={getData.images} alt="" />
      <p>`{getData.price}`</p>
      <p>{getData.description}</p>

    </div>
    <button>Prev</button>
    <button>Next</button>
  
  </div>

);

}

export default App
