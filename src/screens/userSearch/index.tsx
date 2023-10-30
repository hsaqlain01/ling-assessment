import React, {useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  Alert,
  Keyboard,
} from 'react-native';
import tw from 'twrnc';
import {useDeviceOrientation} from '@react-native-community/hooks';

import SearchInput from '../../components/SearchInput';
import {SearchButton} from '../../components/SearchButton';
import {RenderSearch} from '../../components/RenderSearch';
import leaderBoard from '../../config/constants/leaderboard.json';
import RenderHeader from '../../components/RenderHeader';
import {FilteredData, FilteredDataItem, PlayersData} from './types';
import {RenderEmpty} from '../../components/RenderEmpty';

const UserSearch = () => {
  const orientation = useDeviceOrientation();
  const data: PlayersData = leaderBoard;

  const [search, setSearch] = useState<string>('');
  const [filteredData, setFilteredData] = useState<FilteredData>([]);

  const dataArray = Object.keys(data).map(key => ({
    ...data[key],
    uid: key,
  }));

  const sortedArray = [...dataArray]
    .sort((a, b) => b.bananas - a.bananas)
    .map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

  const searchUser = () => {
    const searchLowerCase = search.toLowerCase();
    const topTen = sortedArray.slice(0, 10);
    const filterItem = topTen.find(
      item => item.name.toLowerCase() === searchLowerCase,
    );

    if (filterItem) {
      setFilteredData(topTen);
    } else {
      const filtered = sortedArray.find(
        (item: FilteredDataItem) => item.name.toLowerCase() === searchLowerCase,
      );
      const nineItems = sortedArray.slice(0, 9);

      if (filtered) {
        setFilteredData([...nineItems, filtered]);
      } else {
        setFilteredData([]);
        Alert.alert(
          'This user name does not exist! Please specify an existing user name!',
        );
      }
    }
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView style={tw`w-full bg-white flex-1`}>
      <StatusBar barStyle={'light-content'} animated />
      <View
        style={tw`flex-row w-full px-3 justify-between bg-yellow-400 h-350px rounded-b-md`}>
        <SearchInput
          search={search}
          setSearch={setSearch}
          setFilteredData={setFilteredData}
        />
        <SearchButton searchUser={searchUser} />
      </View>

      <FlatList
        style={tw`w-full h-full absolute ${
          orientation === 'landscape' ? 'top-24' : 'top-50'
        }   self-center bg-white  rounded-t-15 `}
        contentContainerStyle={tw`pb-30`}
        showsVerticalScrollIndicator={false}
        data={filteredData}
        ListHeaderComponent={filteredData.length > 0 ? <RenderHeader /> : null}
        ListEmptyComponent={<RenderEmpty />}
        renderItem={({item, index}) => (
          <RenderSearch user={item} index={index} search={search} />
        )}
      />
    </SafeAreaView>
  );
};
export default UserSearch;
