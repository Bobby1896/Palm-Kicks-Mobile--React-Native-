import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Pages = () => {
  const [data, setData] = useState(0);

  return (
    <View></View>
    // <View style={{flex: 1}}>
    //   <Button onPress={() => setData(data - 1)} title="Decrease data" />
    //   <Text style={{fontSize: 30}}>{data}</Text>
    //   <Button onPress={() => setData(data + 1)} title="Increase data" />

    //   <TextInput
    //     style={{borderWidth: 1, marginTop: 15}}
    //     placeholder="Enter Username"
    //     maxLength={10}
    //   />

    //   <TextInput
    //     style={{borderWidth: 1, marginTop: 15}}
    //     placeholder="Enter Pin"
    //     keyboardType="numeric"
    //   />

    //   <Button style={{marginTop: 30}} title="Submit" />
    // </View>
  );
};
export default Pages;
