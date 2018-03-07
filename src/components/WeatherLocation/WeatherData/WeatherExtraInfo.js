import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className='h-v'>
    <p><strong>{`Humedad: ${humidity} % `}</strong></p>
    <p><strong>{`Vientos: ${wind}`}</strong></p>
  </div>

);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;