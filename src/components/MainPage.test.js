import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

import React from 'react'
import MainPage from './MainPage';

let wrapper;
beforeEach( () => {
  const mockProps = {
    onRequestRobots:jest.fn(),
    robots:[{
      id:3,
      name: 'John',
      email: 'john@gmail.com'
    } ],
    searchField:'',
    isPending: false
  }
  wrapper = shallow( <MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([{
    id:3,
    name: 'John',
    email: 'john@gmail.com'
  } ]);
});


it('filters robots correctly with params', () => {
  const mockProps2 = {
    onRequestRobots:jest.fn(),
    robots:[{
      id:3,
      name: 'John',
      email: 'john@gmail.com'
    } ],
    searchField:'a',
    isPending: false
  }
  const filteredRobots = [];
  const wrapper2 = shallow(<MainPage {...mockProps2}/>)
  expect(wrapper2.instance().filterRobots([])).toEqual([]);
});


it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots:jest.fn(),
    robots:[{
      id:3,
      name: 'John',
      email: 'john@gmail.com'
    } ],
    searchField:'John',
    isPending: false
  }
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3}/>)
  expect(wrapper3.instance().filterRobots()).toEqual([{
    id:3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
});
