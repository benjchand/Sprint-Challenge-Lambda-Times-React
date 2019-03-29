import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  // console.log (props.individualCardData)
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.image} alt={props.author}/>
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  individualCardData: PropTypes.object,
  headline: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string
}
export default Card;
