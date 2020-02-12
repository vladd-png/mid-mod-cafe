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

  it('should update state when handleChange is invoked', () => {
    let mockEvent = {target: {name: 'name', value: 'Ranger' } }
    let expected = 'Ranger'
    // wrapper.find('#test-input').simulate('change');
    // expect(wrapper.handleChange()).toHaveBeenCalled();
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual(expected);

  })

})
