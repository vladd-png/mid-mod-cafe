import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }
  render() {
    return(
      <form className='user-form'>
        <input className='form-input' type='text' placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' />
        <input className='form-input' type='text' placeholder='Date (mm/dd)' value={this.state.date} onChange={this.handleChange} name='date' />
        <input className='form-input' type='text' placeholder='Time' value={this.state.time} onChange={this.handleChange} name='time' />
        <input className='form-input' type='text' placeholder='Number of Guests' value={this.state.number} onChange={this.handleChange} name='number' />
        <button className='submit-btn' type='button'>Make Resservation</button>
      </form>
    )
  }
}

export default Form
