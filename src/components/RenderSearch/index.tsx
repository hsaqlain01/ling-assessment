import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';

import {IRenderData} from './types';

export const RenderSearch = ({user, search, index}: IRenderData) => {
  return (
    <View
      style={tw`flex-row w-full bg-white  border-t-2 h-15  ${
        index === 9 ? 'rounded-b-md border-b-2' : ''
      }  border-yellow-400  `}>
      <View
        style={tw`w-3/10 border-black items-center justify-center border-r-2 border-yellow-400  `}>
        <Text
          style={tw`my-3 ${
            search === user?.name ? 'text-red-700' : ' text-black'
          }  px-2 text-center `}>
          {user?.name}
        </Text>
      </View>
      <View
        style={tw`w-2/10 border-black border-r-2 items-center justify-center  border-yellow-400 `}>
        <Text style={tw`text-black`}>{user?.rank}</Text>
      </View>
      <View
        style={tw`w-2/10  border-black border-r-2  items-center justify-center  border-yellow-400 `}>
        <Text style={tw`text-black`}>{user?.bananas}</Text>
      </View>
      <View
        style={tw`w-3/10 border-white items-center justify-center  border-yellow-400 `}>
        <Text style={tw`text-black`}>
          {search === user?.name ? 'yes' : 'no'}
        </Text>
      </View>
    </View>
  );
};
