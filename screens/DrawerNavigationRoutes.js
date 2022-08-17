/* eslint-disable prettier/prettier */
import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './drawerScreens/HomeScreen';
import SettingScreen from './drawerScreens/SettingScreen';
import NavigationDrawer from './Components/NavigationDrawer';
import CustomSidebar from './Components/CustomSidebarMenu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeft: () => <NavigationDrawer navigationProps={navigation} />,
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => <NavigationDrawer navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigationRoutes = (props) => {
  return (
    <Drawer.Navigator
    drawerContent={(prop)=> <CustomSidebar {...prop}/>}
      screenOptions={{
        drawerActiveTintColor: '#cee1f2',
        drawerItemStyle: {marginVertical: 5, color: 'white'},
        drawerLabelStyle: {color: '#d8d8d8'},
        headerShown: false,
      }}>
      <Drawer.Screen
        name="HomeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="SettingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={SettingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutes;
