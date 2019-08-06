import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';

import React from 'react'
import Card from './Card';

it('expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})
