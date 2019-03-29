import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState ({ 
      tabs: tabData,
      cards: cardData
    
  })
  }

  changeSelected = tab => {
    console.log (tab)
    this.setState({
      selected: tab,
    })
  };

  filterCards = (cardType) => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selected
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithm for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */

  // let newCardData = '';
  //   if(!this.state.selected === 'all') {
  //       newCardData = cardData.filter(individualCard => {return individualCard.tab == this.state.selected})
  //   } else {
  //      newCardData = cardData
  //   }

  let newCardData = cardData.filter(individualCard => {return individualCard.tab == this.state.selected})
  if(this.state.selected === 'all') {
    newCardData = cardData
  }

    return newCardData
  };

  render() {
    return (
      <div className="content-container">
        
        <Tabs 
          tabs={this.state.tabs}
          selectedTab = {this.state.selected}
          selectTabHandler = {this.changeSelected} 
        />
        <Cards 
          cards={this.filterCards()} 
        />
      </div>
    );
  }
}
