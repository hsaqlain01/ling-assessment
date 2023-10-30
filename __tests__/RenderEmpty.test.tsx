import React from 'react';
import renderer from 'react-test-renderer';
import RenderHeader from '../src/components/RenderHeader';
import {RenderEmpty} from '../src/components/RenderEmpty';

it('Header renders correctly', () => {
  const tree = renderer.create(<RenderEmpty />).toJSON();
  expect(tree).toMatchSnapshot();
});
