import React from 'react';
import MyContext from './MyContext';


const Header = () => {
  return(
    <MyContext.Consumer>
    {(context) => (
      <React.Fragment>
        <h1 className='title'>
          <img src={context.state.imgurl} alt="ttg"/>
          <p className='h2Subtitle' style={{color: context.state.colorSubtitle}}>{context.state.subtitle}</p>
          {/* <button onClick={context.changeColorSubtitle}>Change Color</button> */}
          <input onChange={context.changeColorSubtitle} type="color" name="color" id="color"/>
        </h1>
      </React.Fragment>
    )}
  </MyContext.Consumer>
  )
}

export default Header;