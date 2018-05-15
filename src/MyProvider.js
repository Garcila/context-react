import React, { Component } from 'react';
import MyContext from './MyContext';
import logo from './images/TTG.png';

// make provider component
class MyProvider extends Component {
  state = {
    imgurl: logo,
    subtitle: 'Season 2 list of episodes',
    bodyParagraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae vel sapiente, culpa adipisci nesciunt tempora maiores, iure corrupti sit voluptate repudiandae. Illo reiciendis, natus sint placeat quae sunt doloremque nemo!',
    episodes: []
  }

  async componentDidMount() {
    const url = 'https://ttgoapi.herokuapp.com';
    await fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ episodes: data }));
  }
  render() {
    return (
      <MyContext.Provider value = {{
        state: this.state,
        // growAYearOlder: () => this.setState({
        //   age: this.state.age + 1
        // })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;