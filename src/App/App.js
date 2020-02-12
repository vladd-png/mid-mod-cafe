import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ReservationContainer from '../ReservationContainer/ReservationContainer.js';
import { getReservations, addReservation, removeReservation } from '../apiCalls.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }
  componentDidMount = () => {
    getReservations()
      .then(reservations =>  this.setState({ reservations }))
      .catch(error => console.log(error.message))
  }
  addReservation = reservation => {
    addReservation(reservation)
      .then(data => this.setState({ reservations: [...this.state.reservations, data] }))
  }
  cancelReservation = id => {
    let filteredReso = this.state.reservations.filter(reso => reso.id !== id)
    this.setState({ reservations: filteredReso })
    removeReservation(id)
      .then(response => console.log(response))
  }
  sortReservation = props => {
    if (props === 'first') {
      let sorted = this.state.reservations.sort((a, b) => parseInt(b.date) - parseInt(a.date))
      console.log(sorted);
    } else if (props === 'last') {
      let sorted = this.state.reservations.sort((a, b) => parseInt(a.date) - parseInt(b.date))
      console.log(sorted);
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationContainer reservations={this.state.reservations} cancelReservation={this.cancelReservation} sortReservation={this.sortReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
