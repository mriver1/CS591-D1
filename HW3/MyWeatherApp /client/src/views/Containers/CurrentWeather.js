import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
//import { WeatherCardError, Loader } from '../Components/index';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    props.actions.getWeatherData({ weatherSearchData: this.props.location.state });
  }

  render() {
    const { loading, loaded, error, currentTemp, currentConditionDescription,
      humidity, wind, cityName, weatherId } = this.props;

    if (error) {
      return (
        <div>
        </div>
      );
    }

    return (
      <div>
        { loaded &&
          (
            <div>
              <div className='homeBtn'>
                <Link to='/'><button>Home</button></Link>
              </div>
              <div >
                <div >
                  
                  <div className='conditionsOverview'>
                    <p>{currentTemp} F</p>
                    <p>{currentConditionDescription}</p>
                  </div>
                  <div className='conditionDetails'>
                    <p>Humidity: {humidity}% </p>
                    <p>Wind Speed: {wind} mph </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const setWeather = function(state) {
  const { main, weather, name, wind, loading, loaded, error } = state;

  return {
    ...state,
    loading: loading,
    loaded: loaded,
    error: error,
    cityName: name,
    weatherId: weather && weather[0].id,
    humidity: main && main.humidity,
    wind: wind && wind.speed,
    windDirection: wind && wind.deg,
    currentTemp: main && Math.round(main.temp),
    currentCondition: weather && weather[0].main,
    currentConditionDescription: weather && weather[0].description,
  };
};

const getWeather = function(dispatch) {
  return {
    actions: {
      getWeatherData: function(weatherSearchData) {
        dispatch(actions.getWeatherData(weatherSearchData));
      },
    },
  };
};

export default connect(setWeather, getWeather)(CurrentWeather);
