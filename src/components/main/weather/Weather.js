import React, { Component } from 'react';
import Form from './Form';

import Forecast from './Forecast';
import "./weather.css";

const API_KEY = "c7a1598dfaf8c6c3d03045dbb0ca5889";


class Weather extends Component {

  state = {
    temt: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    var city = e.target.elements.city.value;
    
    
  if (city) {
    const api_url = await 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json ();
   

    const time = ms =>{
      var date = new Date(ms*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }

      var sunrise_date = time(data.sys.sunrise);

    this.setState ({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunrise: sunrise_date,
        error: undefined
    });
  } else {
    this.setState ({
      temt: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunrise: undefined,
      error: "Enter the name of the city"
  });
  }
}

render() {
    return (
      <div className="wrapper">
        <Form gettingWeather={this.gettingWeather} />
        <Forecast 
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        pressure={this.state.pressure}
        sunrise={this.state.sunrise}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default Weather;