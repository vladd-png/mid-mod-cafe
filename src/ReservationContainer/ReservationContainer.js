import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard.js';
import './ReservationContainer.css';

const ReservationContainer = props => {
  let allReservations = props.reservations.map(reso => <ReservationCard key={reso.id} name={reso.name} date={reso.date} number={reso.number} time={reso.time} cancelReservation={props.cancelReservation} id={reso.id}/>)
  return (
    <section className='card-holder'>
      {allReservations}
    </section>
  )
}

export default ReservationContainer;
