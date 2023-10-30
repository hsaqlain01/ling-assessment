import React from 'react';
import renderer from 'react-test-renderer';
import RenderHeader from '../src/components/RenderHeader';

it('Header renders correctly', () => {
  const tree = renderer.create(<RenderHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
