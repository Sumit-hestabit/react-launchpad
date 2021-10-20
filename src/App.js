import React, { Component } from 'react';
import './App.css';
import Child from "./Child";

class App extends React.Component{
  constructor()
  {
    super()
    this.state = {
      name : 'Parent Hestabit'
    }
  }
  changeUnit(item){
    this.setState({name:item})
  }
  render()
    {
      return(
    <div>
      <h1>Pass the Data to child to parent</h1>
      <Child data= {{
        name : this.state.name ,changeUnit:this.changeUnit.bind(this)
      }}/>
    </div>
  )

    }
  }
export default App;