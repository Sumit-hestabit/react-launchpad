

import React from "react";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      clickStatus: false,
    };
  }
  componentWillMount(){
    console.log('component will mount')
  }
  getList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>this.setState({list:data}));
  }
 
  componentDidMount(){
    console.log('component did mount')
    this.getList();
  }
 
 
  shouldComponentUpdate(nextProps,nextState){
    return this.state.list!== nextState.list
  }
  componentWillUpdate(nextProps,nextState){
    console.log('component will update');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('component did update');
  }

render() {
  return (
     <div>
        <h3>Hello Mounting Lifecycle Methods! {this.state.getList}</h3>
     </div>
  );
}

}

export default App;

