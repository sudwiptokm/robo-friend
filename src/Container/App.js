import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import "./App.css"
import Scroll from "../Components/Scroll"

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots : [],
      searchfield : ""
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({robots: user}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    
  }
  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    }
    else{
      return(
        <div className="tc">
          <h1 className="ttu f1"> Robo Friends </h1>
          <SearchBox searchchange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots = {filteredRobots} />
          </Scroll>
        </div>
      )
    }
    
  }
}

export default App
