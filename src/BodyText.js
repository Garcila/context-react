import React, { Fragment } from 'react';
import MyContext from './MyContext';


const BodyText = () => {
  return(
    <MyContext.Consumer>
    {(context) => (
      <Fragment>
        <p>
          {context.state.bodyParagraph}
        </p>
      </Fragment>
    )}
  </MyContext.Consumer>
  )
}

export default BodyText;