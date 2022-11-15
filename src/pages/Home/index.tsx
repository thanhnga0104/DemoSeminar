import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// import {SearchBar} from '@rneui/themed';
import {SearchBar} from '@rneui/base';
import GameCard from '../../components/card/GameCard';
const Home = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };
  return (
    <SafeAreaView>
      <SearchBar
        platform="android"
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onChangeText={updateSearch}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        value={search}
      />
      <View style={{backgroundColor: '#fff'}}>
        <Text>List game</Text>
        <GameCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;
