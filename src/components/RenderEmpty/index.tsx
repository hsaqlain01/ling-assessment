import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

export const RenderEmpty = () => {
  return (
    <View style={tw`flex flex-1 justify-center items-center`}>
      <Text style={tw`text-black text-center text-lg w-80 mt-12`}>
        Please search for a user using their full name.
      </Text>
    </View>
  );
};
