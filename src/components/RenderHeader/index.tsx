import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';

const RenderHeader = () => {
  return (
    <View style={tw`flex-row w-full`}>
      <View
        style={tw`w-3/10 h-15 border-black items-center justify-center border-r-2 border-yellow-400  `}>
        <Text style={tw`my-3 text-black mt-5`}>Name</Text>
      </View>
      <View
        style={tw`w-2/10 h-15 border-black border-r-2   border-yellow-400  items-center justify-center`}>
        <Text style={tw`my-3 text-black  mt-7`}>Rank</Text>
      </View>
      <View
        style={tw`w-2/10  h-15 border-black border-r-2 items-center justify-center  border-yellow-400 `}>
        <Text style={tw`my-3 text-Black  mt-7`}>Bananas</Text>
      </View>
      <View
        style={tw`w-3/10 h-15 border-white items-center justify-center px-1 `}>
        <Text style={tw`my-3 text-black text-center text-xs mt-7`}>
          isSearchedUser?
        </Text>
      </View>
    </View>
  );
};

export default RenderHeader;
