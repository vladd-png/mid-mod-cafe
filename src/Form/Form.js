import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  addReservation = props => {
    this.props.addReservation(this.state)
    this.setState({ name: '', date: '', time: '', number: null })
  }
  render() {
    return(
      <form className='user-form'>
        <input id='test-input' className='form-input' type='text' placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' required/>
        <input className='form-input' type='text' placeholder='Date (mm/dd)' value={this.state.date} onChange={this.handleChange} name='date' required/>
        <input className='form-input' type='text' placeholder='Time' value={this.state.time} onChange={this.handleChange} name='time' required/>
        <input className='form-input' type='text' placeholder='Number of Guests' value={this.state.number} onChange={this.handleChange} name='number' required/>
        <button className='submit-btn' type='button' onClick={this.addReservation}>Make Resservation</button>
      </form>
    )
  }
}

export default Form
