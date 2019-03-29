import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {

  return (
    <div
      className={`tab${props.tab===props.selectedTab ? " active-tab" : ""}`}
      onClick={() => {
        props.selectTabHandler(`${props.tab}`)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


Tab.propType = {
  tab: PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}

export default Tab;
