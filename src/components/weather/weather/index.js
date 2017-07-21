import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  text-align: center;
  bottom: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const Temperature = styled.h1`
  margin: 0;
  font-size: 48px;
`;

const Description = styled.div`
  font-size: 20px;
`;

const iconStyles = {
  fontSize: '74px'
};

class Weather extends React.Component {
  render() {
    return <Container>
        <span className="glyphicon glyphicon-cloud" style={iconStyles}></span>
        <Temperature>30°</Temperature>
        <Description>Mostly Sunny</Description>
      </Container>
  }
}

export default Weather
