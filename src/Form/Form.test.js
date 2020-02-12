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

})
