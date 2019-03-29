import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
       
       
        {props.tabs.map(tabBeingSelected =>
          <Tab 
          key = {tabBeingSelected}
          tab = {tabBeingSelected}
          selectTabHandler = {props.selectTabHandler}
          selectedTab = {props.selectedTab}
          />
          )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array
}

export default Tabs;
