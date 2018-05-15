import React, { Component } from 'react';
import './App.css';

// make new Context
const MyContext = React.createContext();

// make provider component
class MyProvider extends Component {
  state = {
    name: 'aasdf',
    age: 222,
    zap: true,
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Person = (props) => {
  return (
    <div className="fam">
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>I'm inside the consumer {context.state.name}</p>
            <p>I'm inside the consumer {context.state.age}</p>
            <button onClick={context.growAYearOlder}>+ 1 Year</button>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  )
}

class Family extends Component {
  render(props) {
    return (
      <div>
        <div className="zapato"></div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>zapato</p>
          <Person />
        </div>
      </MyProvider>
    );
  }
}

export default App;
