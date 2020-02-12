import { getReservations } from './apiCalls.js';

describe('getReservations', () => {
  let mockResponse = [{
    name: 'Ranger',
    date: '01/31',
    time: '7:16',
    number: '3'
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should call with the correct url', () => {
    getReservations()
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  });

  it('HAPPY: should return an array of reservations', () => {
    expect(getReservations()).resolves.toEqual(mockResponse)
  })

  it('SAD: should return an error when response status not ok', () => {
    window.fetch= jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        error: 'Error while fetching'
      })
    })
    expect(getReservations()).rejects.toEqual(Error('Error while fetching'))
  })

});
