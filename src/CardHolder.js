import React, {Component } from 'react';
import CardItem from './CardItem';

class CardHolder extends Component {
  render() {
    return (
      <div className='container'>
        <CardItem />
      </div>
    )
  }
}

export default CardHolder;