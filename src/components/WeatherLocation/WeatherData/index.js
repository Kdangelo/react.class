import React from 'react'; // siempre va este paso
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
const { temperature, weatherState, humidity, wind } = data;
  return (    
  <div className='weatherDataCont'>
    <strong><span className='time'>
    <WeatherTemperature temperature={temperature} weatherState = {weatherState}/></span></strong>
    <span><WeatherExtraInfo humidity={humidity} wind={wind}/></span>
  </div>
  )
};
// para validar objetos
WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;