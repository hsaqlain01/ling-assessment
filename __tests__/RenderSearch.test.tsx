import React from 'react';
import renderer from 'react-test-renderer';
import {RenderSearch} from '../src/components/RenderSearch';

it('Header renders correctly', () => {
  const tree = renderer.create(<RenderSearch />).toJSON();
  expect(tree).toMatchSnapshot();
});
