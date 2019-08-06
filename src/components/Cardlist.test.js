import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import React from 'react'
import CardList from './CardList';

it('expect to render Card component', () => {
  const mockRobots = [
    {
      id:1,
      name: 'John Snow',
      username: 'JohnJohn',
      email:'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})

it('filters robots correctly', () => {
  
})
