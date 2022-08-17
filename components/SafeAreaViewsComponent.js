/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  ALert,
  Alert,
} from 'react-native';
import React from 'react';

const SafeAreaViewsComponent = () => {
  const simpleClick = () => {
    alert('Simple Alert');
  };
  const twoButtonOption = () => {
    Alert.alert(
      'hello',
      'Do you want to cancel me ?',
      [
        {
          text: 'Yes',
          onPress: () => console.log('Yess Pressed'),
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  const threeButtonOption = () => {
    Alert.alert(
      //title
      'Title',
      //body
      'Message Body',
      [
        {
          text: 'Option 1',
          onPress: () => console.log('May be Pressed'),
        },
        {
          text: 'Option 2', onPress: () => console.log('Yes Pressed'),
        },
        {
          text: 'Option 3', onPress: () => console.log('OK Pressed'),
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, padding: 20, backgroundColor: 'gray'}}>
          <Text>What is Lorem Ipsum?</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: 20,
            backgroundColor: '#ecf0f1',
          }}>
          <Button title="Simple Alert" onPress={simpleClick} />
          <Button title="Two Button" onPress={twoButtonOption} />
          <Button title="Three Button" onPress={threeButtonOption} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeAreaViewsComponent;

const styles = StyleSheet.create({});
