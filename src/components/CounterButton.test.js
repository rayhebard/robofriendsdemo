import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import React from 'react'
import CounterButton from './CounterButton';

it('expect to render Card component', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color = {mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () =>{
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color = {mockColor} />);

  wrapper.find('[id="counter"]').simulate( 'click' );
  wrapper.find('[id="counter"]').simulate( 'click' );
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual( 'red' )
});
