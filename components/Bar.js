import React, {useState} from 'react';
import {View, Text, Modal, Button, TextInput} from 'react-native';
import barStyle from '../style/barStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Bar = () => {
  const [submit, setSubmit] = useState(false);

  return (
    <View style={{marginTop: 50}}>
      <TextInput
        style={{marginTop: 15, borderColor: 'skyblue', borderWidth: 2}}
        placeholder="Enter Username"
      />
      <TextInput
        style={{
          marginTop: 15,
          marginBottom: 15,
          borderColor: 'skyblue',
          borderWidth: 2,
        }}
        placeholder="Enter Password"
        secureTextEntry={true}
      />

      <Button
        title="submit"
        onPress={() => {
          setSubmit(true);
        }}
      />

      <Modal transparent={true} visible={submit}>
        <View style={{backgroundColor: 'grey', flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              textAlign: 'center',
              margin: 50,
              marginTop: 50,
              padding: 20,
              flex: 1,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 30}}>Succesfuy Submitted ✔</Text>
            <Button
              title="Done"
              onPress={() => {
                setSubmit(false);
              }}
            />
          </View>
        </View>
      </Modal>

      {/* <FontAwesome5 name={'facebook'} size={100} color="blue" /> */}
    </View>
  );
};

export default Bar;
