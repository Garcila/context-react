import React from 'react';
import MyContext from './MyContext';


const Header = () => {
  return(
    <MyContext.Consumer>
    {(context) => (
      <React.Fragment>
        <h1 className='title' 
          style={{ background: `linear-gradient(120deg, grey 0%,${context.state.hexColor} 100%)`}}
    // background: linear-gradient(120deg, #9eeefc 0%, #a6c1ee 100%);          
        >
          <img src={context.state.imgurl} alt="ttg"/>
          <p className='h2Subtitle' style={{color: context.state.colorSubtitle}}>{context.state.subtitle}</p>
          <input 
            onChange={context.changeColorSubtitle}
            type="color" 
            name="color" 
            id="color"
          />
          {/* <button onClick={context.chaCol}>ChaCol</button> */}
        </h1>
      </React.Fragment>
    )}
  </MyContext.Consumer>
  )
}

export default Header;