import {React, useState} from 'react'
import './joke.css'
import Button from './button'

const Joke = () => {

    const [joke, setJoke] = useState("")
    const fetchApi= () =>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke) )
    }

    return(
        <div className="main-container" >
        
           <div className="joke">
           <h1>Joke Generator using react and Joke API</h1>
          <Button callApi= {fetchApi}/>
          <div>{joke}</div>
            </div> 
        </div>
    )
}

export default Joke