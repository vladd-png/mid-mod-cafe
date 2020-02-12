import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  let mockResponse = { name: 'Charlie Day', date: '04/01', time: '7pm', number: '8' }

  beforeEach(() => {
    wrapper=shallow(<App />);
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })

  it('should be an instance of App', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update update reservation state when componentDidMount is called', () => {
    wrapper.instance().componentDidMount();
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  })

})
