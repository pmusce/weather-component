
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 3px 10px;
  margin: 10px;
  font-family: arial;
  color: rgb(190, 187, 214);
`;
const LocationName = styled.h2`

`;

class TimeLabel extends React.Component {
  render() {
    return <h4>
      {this.props.children.toLocaleString('en-us', {  weekday: 'long' })}
    </h4>
  }
}

const Location = ({ children, time }) =>
  <Container>
    <LocationName>{children}</LocationName>
    <TimeLabel>{time}</TimeLabel>
  </Container>


Location.propTypes = {
  children: PropTypes.string.isRequired,
}
Location.defaultProps = {
  time: new Date()
}
export default Location
