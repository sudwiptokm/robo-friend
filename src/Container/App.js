import React, {useEffect, useState} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import "./App.css"
import Scroll from "../Components/Scroll"

function App () {

  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState("")

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => setRobots(user))
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
    
  }
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  })
  if (robots.length === 0){
    return <h1>Loading</h1>
  }
  else{
    return(
      <div className="tc">
        <h1 className="ttu f1"> Robo Friends </h1>
        <SearchBox searchchange = {onSearchChange}/>
        <Scroll>
          <CardList robots = {filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default App
