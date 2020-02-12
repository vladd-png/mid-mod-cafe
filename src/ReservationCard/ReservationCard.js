import React from 'react';

const ReservationCard = props => {
  return (
    <article>
      <h1>{props.name}</h1>
      <h2>{props.date}</h2>
      <h2>{props.time}</h2>
      <h2>Number of Guests: {props.number}</h2>
      <button type='text'>Cancel </button>
    </article>
  )
}

export default ReservationCard
