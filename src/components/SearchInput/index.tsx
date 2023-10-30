import React from 'react';
import {View, TextInput} from 'react-native';
import tw from 'twrnc';

import SearchIcon from '../../assets/svg/searchIcon.svg';
import {InputObject} from './types';

const SearchInput = ({setSearch, search, setFilteredData}: InputObject) => {
  return (
    <View
      style={tw`flex-row w-6.5/10 px-2 py-2 border-2 border-white rounded-xl h-50px mt-5`}>
      <View style={tw`mr-2`}>
        <SearchIcon fill={'#fff'} width="30" height="30" />
      </View>
      <TextInput
        value={search}
        onFocus={() => setFilteredData([])}
        style={tw`text-white font-semibold`}
        onChangeText={text => {
          text === ''
            ? (setFilteredData([]), setSearch(text))
            : setSearch(text);
        }}
        placeholder="Search"
        placeholderTextColor={'#fff'}
      />
    </View>
  );
};

export default SearchInput;
