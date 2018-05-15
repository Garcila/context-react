import React, { Component } from 'react';
import MyProvider from './MyProvider';
import Header from './Header';
import BodyText from './BodyText';
import CardHolder from './CardHolder';

class App extends Component {
  render() {
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