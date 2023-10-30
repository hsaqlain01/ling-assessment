import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

import {SearchButtonProps} from './types';

export const SearchButton = ({searchUser}: SearchButtonProps) => {
  return (
    <TouchableOpacity
      onPress={searchUser}
      style={tw`w-3/10 px-2 py-2 border-2 border-white rounded-xl items-center justify-center h-50px mt-5`}
      activeOpacity={0.5}>
      <Text style={tw`text-white font-semibold`}>Search</Text>
    </TouchableOpacity>
  );
};
