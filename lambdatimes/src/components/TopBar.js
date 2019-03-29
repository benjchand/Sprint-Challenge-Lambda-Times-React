import React from 'react';
import styled, { css } from 'styled-components'


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBarContainer = styled.section `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;  
  @media (min-width: 1280px) {
      width: 1280px;
    }
  }
`

const TopBarLeft = styled.section`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const TopBarLeftSpan = styled.section `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const TopBarCenter = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const TopBarCenterSpan = styled.section `
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`

const TopBarRight = styled.section `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBarRightSpan = styled.section `
  cursor: pointer;
`


const TopBar = () => {
  return (
    <div className="top-bar">
      <TopBarContainer>
        <TopBarLeft>
          <TopBarLeftSpan>TOPICS</TopBarLeftSpan><TopBarLeftSpan>SEARCH</TopBarLeftSpan>
        </TopBarLeft>
        <TopBarCenter>
          <TopBarCenterSpan>GENERAL</TopBarCenterSpan><TopBarCenterSpan>BROWNBAG</TopBarCenterSpan><TopBarCenterSpan>RANDOM</TopBarCenterSpan><TopBarCenterSpan>MUSIC</TopBarCenterSpan><TopBarCenterSpan>ANNOUNCEMENTS</TopBarCenterSpan>
        </TopBarCenter>
        <TopBarRight>
          <TopBarRightSpan>LOG IN</TopBarRightSpan>
        </TopBarRight>
      </TopBarContainer>
    </div>
  )
}

export default TopBar;