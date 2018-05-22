import React, { Component } from 'react';
import MyContext from './MyContext';
import logo from './images/TTG.png';
import brainResult from './Brain';
import getRgb from './Helpers';


// make provider component
class MyProvider extends Component {
  state = {
    rgbSelected: '{red:0,green:0,blue:0}',
    imgurl: logo,
    subtitle: 'Season 2 list of episodes',
    bodyParagraph: 'Lorem ipsum dolor sit amet',
    episodes: [],
    colorSubtitle: 'rgb(0,0,0)',
    hexColor: '#ADD8E6',
  }


  async componentDidMount() {
    const url = 'https://ttgoapi.herokuapp.com';
    await fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ episodes: data }));
  }

  render() {
    const { rgbSelected } = this.state;
    return (
      <MyContext.Provider value = {{
        state: this.state,
        changeColorSubtitle: (e) => {
          this.setState({hexColor: e.target.value});
          let selectedColor = getRgb(e.target.value);
          this.setState({ rgbSelected: selectedColor });
          let a = brainResult(selectedColor);         
              if (a.light > a.dark) {
                this.setState({colorSubtitle: 'rgb(0,0,0)'})
             } else {
               this.setState({colorSubtitle: 'rgb(255,255,255)'}) 
             }
        },
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
