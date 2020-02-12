import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ReservationContainer from '../ReservationContainer/ReservationContainer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(reservations =>  this.setState({ reservations }))
      .catch(error => console.log(error.message))
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
