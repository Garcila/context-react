import React from 'react';
import MyContext from './MyContext';


const Header = () => {
  return(
    <MyContext.Consumer>
    {(context) => (
      <React.Fragment>
        <h1 className='title'>
          <img src={context.state.imgurl} alt="ttg"/>
          <p className='h2Subtitle'>{context.state.subtitle}</p>
          <button onClick={context.growAYearOlder}>+ 1 Year</button>
        </h1>
      </React.Fragment>
    )}
  </MyContext.Consumer>
  )
}

export default Header;