import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Resume from './resume/Resume';
import Weather from './weather/Weather';
import List from './toDoList/List';


class Main extends Component {
render() {
    return (
      <div className="main">
        <div className='container'>
           <Route path="/" exact component={Resume}/> 
           <Route path="/weather" component={Weather}/>
           <Route path="/list" component={List}/>
        </div>
      </div>
      
    );
  }
}

export default Main;