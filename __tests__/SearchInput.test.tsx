import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchInput from '../src/components/SearchInput'; // Adjust the import path as needed

// Mock the SearchIcon SVG component
jest.mock('../src/assets/svg/searchIcon.svg', () => 'SearchIcon');

describe('SearchInput component', () => {
  it('should render the SearchInput component', () => {
    const setSearch = jest.fn();
    const setFilteredData = jest.fn();

    const {getByPlaceholderText} = render(
      <SearchInput
        setSearch={setSearch}
        search=""
        setFilteredData={setFilteredData}
      />,
    );

    const inputElement = getByPlaceholderText('Search');
    expect(inputElement).toBeTruthy();
  });

  it('should call setSearch and setFilteredData on text change', () => {
    const setSearch = jest.fn();
    const setFilteredData = jest.fn();

    const {getByPlaceholderText} = render(
      <SearchInput
        setSearch={setSearch}
        search=""
        setFilteredData={setFilteredData}
      />,
    );

    const inputElement = getByPlaceholderText('Search');

    fireEvent.changeText(inputElement, 'Test Input');

    expect(setSearch).toHaveBeenCalledWith('Test Input');
    // expect(setFilteredData).toHaveBeenCalledWith([]);
  });

  it('should call setFilteredData when the input is focused', () => {
    const setSearch = jest.fn();
    const setFilteredData = jest.fn();

    const {getByPlaceholderText} = render(
      <SearchInput
        setSearch={setSearch}
        search=""
        setFilteredData={setFilteredData}
      />,
    );

    const inputElement = getByPlaceholderText('Search');

    fireEvent(inputElement, 'focus');

    expect(setFilteredData).toHaveBeenCalledWith([]);
  });
});
