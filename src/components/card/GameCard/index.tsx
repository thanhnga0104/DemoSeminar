import {Button} from '@rneui/base';
import React from 'react';
import {Image, View, Text} from 'react-native';

const GameCard = () => {
  return (
    <View>
      <Image
        style={{height: 100, width: 100}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxMCWvSsRIJ6iBXGmco6BVYmpnPxoAWDfh0kTJ47DFQ&s',
        }}
      />
      <Text>Game Name</Text>
      <Text>Game Des</Text>
      <Button title="Solid" />
    </View>
  );
};
export default GameCard;
