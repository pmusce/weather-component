import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Weather from '../weather'

const Container = styled.div`
  position: relative;
  margin: 10px;
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
      location: ''
    }

    this.updateWeather = this.updateWeather.bind(this)
  }

  componentDidMount () {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bologna&units=metric&APPID=45e97efeb646071cbbc753932df57a4f'
    fetch(url).then(function (response) {
      return response.json()
    }).then(this.updateWeather);
  }

  updateWeather(weather) {
    this.setState({
      location: weather.name,
      temperature: weather.main.temp,
      desc: weather.weather[0].description,
      icon: weather.weather[0].id
    })
  }

  render() {
    return <Container>
      <Location>{this.state.location}</Location>
      <Weather
        temperature={this.state.temperature}
        desc={this.state.desc}
        icon={this.state.icon}/>
    </Container>
  }
}

export default WeatherWidget
