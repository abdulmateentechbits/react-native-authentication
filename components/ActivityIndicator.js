/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';

const ActivityIndicatorElement = () => {
  //making a view to show to while loading the webpage
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
      }}>
      <ActivityIndicator color="#009688" size="large" />
    </View>
  );
};

export default ActivityIndicatorElement;
