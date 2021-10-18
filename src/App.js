import React, { Component } from 'react';
import './App.css';

import GameMgr from '../src/component/GameMgr';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameMgr />
      </div>
    );
  }
}

export default App;