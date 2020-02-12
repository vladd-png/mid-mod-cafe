export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(!response.ok) {
        throw Error('Error while fetching')
      } else {
        return response.json()
      }
    })
}

export const addReservation = (reservation) => {
  let options = {
    method: 'POST',
    body: JSON.stringify({ ...reservation, id: Date.now() }),
    headers: {
      'Content-type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => {
      if(!response.ok) {
        throw Error('Could not Delete at this time')
      } else {
        return response.json()
      }
    })
}

export const removeReservation = id => {
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
}
