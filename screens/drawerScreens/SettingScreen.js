/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Example of Splash, Login and Sign Up in React Native
            {'\n\n'}
            This is the Settings Screen
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Splash, Login and Register Example{'\n'}React Native
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
