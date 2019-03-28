import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class Weather extends Component {
  constructor(props) {
    super(props);

    props.actions.getWeatherData({ weatherSearchData: this.props.location.state });
  }

  render() {
    const {loaded, error, Temp, ConditionDescription,
      humidity, wind } = this.props;

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
              <div className='Home'>
                <Link to='/'><button>Home</button></Link>
              </div>
              <div >
                <div >
                  
                  <div className='Temp'>
                    <p>{Temp} F</p>
                    <p>{ConditionDescription}</p>
                  </div>
                  <div className='HumidityAndWind'>
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
    loaded: loaded,
    error: error,
    cityName: name,
    weatherId: weather && weather[0].id,
    humidity: main && main.humidity,
    wind: wind && wind.speed,
    windDirection: wind && wind.deg,
    Temp: main && Math.round(main.temp),
    Condition: weather && weather[0].main,
    ConditionDescription: weather && weather[0].description,
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

export default connect(setWeather, getWeather)(Weather);
