import React from 'react';
import {View, Text} from 'react-native';
import Bar from './components/Bar';
import Pages from './components/Pages';

const App = () => {
  return (
    <View style={{margin: 30, flex: 1}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: 'black',
          marginTop: 150,
        }}>
        Palm Kicks Registration
      </Text>
      <Pages />
      <Bar data={'Jonathan, Congratulation'} />
    </View>
  );
};

export default App;
