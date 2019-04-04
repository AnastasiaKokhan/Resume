import React, { Component } from 'react';




class Form extends Component {
render() {
    return (
      <div >
        <div className='form'>
        <form onSubmit={this.props.gettingWeather}>
            <input type='text' name='city' placeholder='City' />
            <button>Submit</button>
        </form>
        </div>
        <div className='block-weather'>
        {/* <img className="weather-photo" src='/images/112.jpg' alt='weather'/> */}
        </div>
      </div>
    );
  }
}

export default Form;