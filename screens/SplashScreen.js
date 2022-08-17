/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Image, ActivityIndicator, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const [animation, setAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(false);
      // Check if user is set or not set
      // If not then send for authentication
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    }, 5000);
  }, []);

  return (
   <>
    <StatusBar barStyle="dark-content" animated />
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
      }}>
      <Image
        source={require('../images/aboutreact.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animation}
        color="#FFFFFF"
        size="large"
        style={{
          alignItems: 'center',
          height: 80,
        }}
      />
    </View>
   </>
  );
};

export default SplashScreen;
