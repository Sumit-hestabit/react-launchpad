import React, { Component } from 'react';
import './App.css';
import Child from "./Child";

class App extends React.Component {
state = {
  title: 'sumit chowhary'
}
ChangeTheTitle = (Amit) => {
this.setState({title: Amit});
}
render(){
  return(
    <div className="App">
      <Child Handler={this.ChangeTheTitle.bind(this,'Hello world')} title={this.state.title}/>
    </div>
  )
}

}
  
export default App;