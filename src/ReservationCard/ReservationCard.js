import React from 'react';
import './ReservationCard.css';

const ReservationCard = props => {
  return (
    <article className='reso-card'>
      <h1 id='card-name'>{props.name}</h1>
      <h2 className='card-details'>{props.date}</h2>
      <h2 className='card-details'>{props.time} pm</h2>
      <h2 className='card-details'>Number of Guests: {props.number}</h2>
      <button className='submit-btn' type='text' onClick={() => props.cancelReservation(props.id)}>Cancel </button>
    </article>
  )
}

export default ReservationCard
