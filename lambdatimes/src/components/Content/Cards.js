import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(cardDataBeingReferenced => 
        <Card
        key = {cardDataBeingReferenced.headline}
        individualCardData = {cardDataBeingReferenced}
        headline = {cardDataBeingReferenced.headline}
        image = {cardDataBeingReferenced.img}
        author = {cardDataBeingReferenced.author}
        />
      )}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}


export default Cards;