import React from 'react';
import renderer from 'react-test-renderer';
import {SearchButton} from '../src/components/SearchButton';

it('Header renders correctly', () => {
  const tree = renderer.create(<SearchButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
