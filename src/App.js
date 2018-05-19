import React, { Component } from 'react';
import './App.css';

import MyProvider from './MyProvider';
import Header from './Header';
import BodyText from './BodyText';
import CardHolder from './CardHolder';
import result from './Brain';


class App extends Component {
  render() {
    console.log(result);
    return (
      <MyProvider>
        <div className="App">
          <Header />
          <BodyText />
          <CardHolder />
        </div>
      </MyProvider>
    );
  }
}

export default App;