import React, { Component } from 'react';


class Forecast extends Component {
render() {
    return (
      <div className='forecast'>
          {
            this.props.city &&
            <div>
            <p>Location: {this.props.city}, {this.props.country}</p>
            <p>Temperature: {this.props.temp} C°</p>
            <p>Pressure: {this.props.pressure}</p>
            <p>Sunset: {this.props.sunrise}</p>
            </div>  
          }
            <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Forecast;