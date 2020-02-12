import React, { Component } from 'react';
import ReservationCard from '../ReservationCard/ReservationCard.js';
import './ReservationContainer.css';

class ReservationContainer extends Component {
  constructor() {
    super()
    this.state = {
      option: ''
    }
  }
  handleChange = event => {
    this.setState({ option: event.target.value })
    this.props.sortReservation(this.state.option)
  }
  render() {
    let allReservations = this.props.reservations.map(reso => <ReservationCard key={reso.id} name={reso.name} date={reso.date} number={reso.number} time={reso.time} cancelReservation={this.props.cancelReservation} id={reso.id}/>)
    return (
      <section className=''>
      <select className='sort-menu' onChange={this.handleChange}>
      <option>Sort Reservations by Date</option>
      <option value='first'>First - Last</option>
      <option value='last'>Last - First</option>
      </select>
      <div className='card-holder'>
      {allReservations}
      </div>
      </section>
    )
  }
}

export default ReservationContainer;
