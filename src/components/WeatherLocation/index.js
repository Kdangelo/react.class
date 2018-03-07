import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

/*import {CLOUD,
          CLOUDY,
          SUN,
          RAIN,
          SNOW,
          WINDY
} from './../../constant/weathers';*/


const api_key = "100f73b249beae5e0fc0095c9e124b3f";
// const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather';
// const api_weather = `${url}?q=${location}&appid=${api_key}&units=metric`;

/*
// vamos a crear otra data para que sea dinamica
const data1 = {
  temperature: 20,
  weatherState: SUN,
  humidity: 10,
  wind:'10m/s'
}*/

/* ya no la usaremos
const data2 = {
  temperature: 10,
  weatherState: SNOW,
  humidity: 5,
  wind:'100m/s'
}*/

class WeatherLocation extends Component {
  constructor ( {city} ) {
    super();
    this.state = {
      city,
      data: null
    };
    console.log('Constructor');
  }

componentWillMount() {
  const { city } = this.state
  const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
  fetch(api_weather).then(data => {
    // console.log(data);
    return data.json();  
  }).then(weather_data => {
    const data = transformWeather(weather_data);
    this.setState({ data })
    // console.log(weather_data);
  })
  console.log('actualizado')
}

// componentWillMount() {
//   console.log('ComponentWillMount');
//   this.handleUpdateClick
// }

// componentDidMount() {
//   console.log('ComponentDidMount')
// }


render = () => {
  const { onWeatherLocationClick } = this.props;
  // console.log('Render');
  const { city, data } = this.state;
  return(
    <div className='weatherLocation' onClick={onWeatherLocationClick}>
      <Location city = { city }/>
      { data ? <WeatherData data={ data }/> :  <CircularProgress size={60} thickness={7} />}
    </div>
    );
  }
}

/* este lo usamos como componente funcional
const WeatherLocation = () => (
  <div className='WeatherLocation'>
   <Location city={'Santiago'}/>
   <WeatherData data={data} />
  </div>
);*/

WeatherLocation.propTypes = {
  city: PropTypes.string,
}

export default WeatherLocation;