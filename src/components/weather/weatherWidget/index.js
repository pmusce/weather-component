import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Weather from '../weather'

const Container = styled.div`
  position: relative;
  width: 260px;
  height: 247px;
  box-sizing: border-box;
  background-color: #93d2fb;
  border-radius: 4px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(168,168,168,0.6);
  -moz-box-shadow: 2px 2px 5px 0px rgba(168,168,168,0.6);
  box-shadow: 2px 2px 5px 0px rgba(168,168,168,0.6);
  padding: 20px;
  color: white;
  font-family: Lato,sans-serif;
`;

const Location = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
`;

class WeatherWidget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: 'Bologna'
    }
  }

  render() {
    return <Container>
      <Location>{this.state.location}</Location>
      <Weather></Weather>
    </Container>
  }
}

export default WeatherWidget
