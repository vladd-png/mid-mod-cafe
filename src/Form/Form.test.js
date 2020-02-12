import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Form', () => {
  let wrapper;
  let mockAddReservation = jest.fn()

  beforeEach(() => {
    wrapper=shallow(<Form
        addReservation={mockAddReservation}
      />);
  })

  it('should be an instance of Form', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when addReservation is invoked', () => {
    wrapper.find('button').simulate('click');
    expect(mockAddReservation).toHaveBeenCalled();
  })

  it('should update state.name when handleChange is invoked', () => {
    let mockEvent = {target: {name: 'name', value: 'Ranger' } }
    let expected = 'Ranger'
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);
  })

  it('should update state.date when handleChange is invoked', () => {
    let mockEvent = {target: {name: 'date', value: '12/10' } }
    let expected = '12/10'
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('date')).toEqual(expected);
  })

  it('should reset its inputs after addReservation is invoked', () => {
    let defaultState = {target: {name: 'name', value: 'Ranger' } }
    let expected = {target: {name: '', value: '' } }
    wrapper.instance().addReservation(defaultState)
    expect(wrapper.state('name')).toEqual('')
  })
})
