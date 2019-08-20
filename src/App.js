import React,{Component} from 'react';
import './App.css';
import SearchBox from "./SearchBox";
import Cardlist from "./Cardlist";
import {robots} from "./robots";
class App extends Component
{

  constructor()
  {
    super();
    this.state = {

      robots : [],
      Searchresult : ""

    };
  }




  onSearchChange = (event) =>
  {

    this.setState({Searchresult:event.target.value})
  
  }

  componentDidMount()
  {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>{this.setState({robots:users})})


  }
  render()
  {
      const filteredRobots = this.state.robots.filter((robot) =>{
        return robot.name.toLowerCase().includes(this.state.Searchresult.toLowerCase())
      });
    return(
      <div className = "tc">
      <h1> RoboFriends</h1>
      <SearchBox searchchange={this.onSearchChange}/>
      <Cardlist robots = {filteredRobots}/>
      </div>
      )
  }
}

export default App;
