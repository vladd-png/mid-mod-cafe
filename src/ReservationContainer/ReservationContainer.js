import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard.js';

const ReservationContainer = props => {
  let allReservations = props.reservations.map(reso => <ReservationCard key={reso.id} name={reso.name} date={reso.date} number={reso.number} time={reso.time} />)
  return (
    <section className='card-holder'>
      {allReservations}
    </section>
  )
}

export default ReservationContainer;
