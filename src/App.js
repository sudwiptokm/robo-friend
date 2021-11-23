import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots : robots,
      searchfield : ""
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }
  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    return(
      <div className="tc">
        <h1 className="ttu f1"> Robo Friends </h1>
        <SearchBox searchchange = {this.onSearchChange}/>
        <CardList robots = {filteredRobots} />
      </div>
    )
  }
  
}

export default App
