import React, { Component } from 'react';
import Task from './Task'

class Field extends Component {

    state = {
          tasks: []
        };

    Add = (text) => {
        var arr = this.state.tasks;
        arr.push (text);
        this.setState ({tasks:arr});
    };    
    deleteBlock = (i) => {
        var arr = this.state.tasks;
        arr.splice (i, 1);
        this.setState ({tasks: arr});
    };
    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    };
    eachTask = (item, i) => {
    return (
        <Task key={i} index={i} updateText={this.updateText} deleteBlock={this.deleteBlock}>
        {item}
        </Task>
    );
    };
    render() {
    return (
        <div className="field">
         <button onClick={this.Add.bind (null, "Task")} className='btn new'>Add task</button>
        {this.state.tasks.map (this.eachTask)}
        </div>
    );
    }
}

export default Field;