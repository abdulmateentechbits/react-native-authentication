/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Feed from './Feed';
import Article from './Article';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = () => {
  const Drawers = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawers.Navigator
      useLegacyImplementation
      // drawerContent={(props)=><CustomDrawerContent {...props}/>}
      screenOptions={{
        drawerStyle:{
            backgroundColor:'#c6cbef',
            width:280,
        },
      }}>
        <Drawers.Screen name="Feed" component={Feed} />
        <Drawers.Screen name="Article" component={Article} />
      </Drawers.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
