import React, { Component } from 'react';

import "./task.css"

class Task extends Component {

    state = {
        edit: false
    }

  edit = () => {
     this.setState ({edit: true});
  }
  remove = () => {
    this.props.deleteBlock (this.props.index);
 }
 save = () => {
    //  var value = this.refs.newTxt.value;
     this.props.updateText (this.refs.newTxt.value, this.props.index);
     this.setState ({edit: false});
 }
 rendNorm = () => {
     return (
    <div className="box">
        <div className='text'>{this.props.children}</div>
        <button onClick={this.edit} className='btn light'>Edit</button>
        <button onClick={this.remove} className='btn red'>Delete</button>
    </div>
 )}
 rendEdit = () => {
     return (
    <div className="box">
        <textarea ref="newTxt" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className='btn success'>Save</button>
       
    </div>
)}

render() {
    if (this.state.edit) {
       return this.rendEdit ();
    } else {
    return this.rendNorm ();
    }
  }
}

export default Task;