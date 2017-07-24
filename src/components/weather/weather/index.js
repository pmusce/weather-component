import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import 'weather-icons/css/weather-icons.min.css'

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Temperature = styled.h1`
  margin: 0;
  font-size: 48px;
`;

const Description = styled.div`
  font-size: 20px;
  text-transform: capitalize;
`;

const Icon = styled.i`
  font-size: 74px;
  line-height: 1.5;
`;

class Weather extends React.Component {
  render() {
    return <Container>
        <Icon className={`wi wi-owm-${this.props.icon}`} />
        <Temperature>{this.props.temperature}°</Temperature>
        <Description>{this.props.desc}</Description>
      </Container>
  }
}

export default Weather
