import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';

const api_key = "100f73b249beae5e0fc0095c9e124b3f";
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    }
  }

componentDidMount() {
  this.updateCity(this.props.city);
}  

componentWillReceiveProps(nextProps) {
  if(nextProps.city !== this.props.city) {
    this.setState( {forecastData: null} );
    this.updateCity(nextProps.city);
  }
}

  updateCity = city => {
    const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;

    fetch(url_forecast).then(data => (data.json())
    ).then(weather_data => {
      console.log(weather_data);
      const forecastData = transformForecast(weather_data);

      this.setState( {forecastData })
      }
    ) 
  }

  renderForecastItemDays( forecastData ) {
    return forecastData.map(forecast => (

      <ForecastItem

        key={`${forecast.weekday}${forecast.hour}`}

        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}>
    </ForecastItem>));     
  }

  renderProgress() {
    return (<h1>Cargando pronóstio extendido</h1>);
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className='forecastTitle'>Pronóstico extendido para {city}</h2>
        {forecastData ? 
        this.renderForecastItemDays(forecastData) :
        this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;