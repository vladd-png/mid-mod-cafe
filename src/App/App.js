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
  addReservation = reservation => {
    let options = {
      method: 'POST',
      body: JSON.stringify({ ...reservation, id: Date.now() }),
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(data => this.setState({ reservations: [...this.state.reservations, data] }))
  }
  cancelReservation = id => {
    let filteredReso = this.state.reservations.filter(reso => reso.id !== id)
    this.setState({ reservations: filteredReso })
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
