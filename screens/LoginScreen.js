/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Keyboard,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Loader from './Components/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputEmailRef = useRef(null);
  const passwordInputRef = useRef(null);
  const handleSubmitPress = () => {
    setErrorMsg('');
    if (!userEmail) {
      alert('Please fill email');
      return;
    }
    if (!userPassword) {
      alert('Please fill password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = new URLSearchParams(dataToSend).toString();
    setLoading(true);
    fetch('http://10.0.2.2:3000/api/user/login',{
      method:'POST',
      body:formBody,
      headers:{
        'Content-Type':'text/html',
      },
    })
    .then(response => response.status)
      .then(responseJson => {
        setLoading(false);
        if (responseJson == '200') {
          AsyncStorage.setItem('user_id', userEmail);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrorMsg('User not found please register');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  const navigateToRegister = () => {
    setErrorMsg('');
    setLoading(false);
    setUserEmail('');
    setUserPassword('');
    passwordInputRef.current.clear();
    inputEmailRef.current.clear();
    navigation.navigate('RegisterScreen');
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <StatusBar
            backgroundColor="white"
            barStyle="dark-content"
            animated={true}
          />
          <Loader loading={loading} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View>
              <KeyboardAvoidingView enabled>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{fontSize: 30, color: 'black'}}>Sign In</Text>
                </View>
                {/* Section */}
                <View
                  style={{
                    flexDirection: 'row',
                    height: 40,
                    marginTop: 20,
                    marginHorizontal: 35,
                    margin: 10,
                    zIndex: 1,
                  }}>
                  <TextInput
                    onChangeText={UserEmail => setUserEmail(UserEmail)}
                    ref={inputEmailRef}
                    onSubmitEditing={() =>
                      passwordInputRef.current &&
                      passwordInputRef.current.focus()
                    }
                    style={{
                      flex: 1,
                      color: 'black',
                      paddingHorizontal: 15,
                      borderWidth: 1,
                      borderColor: 'black',
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    placeholder="Enter your email"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 40,
                    marginTop: 20,
                    marginHorizontal: 35,
                    margin: 10,
                  }}>
                  <TextInput
                    onChangeText={UserPassword => setUserPassword(UserPassword)}
                    ref={passwordInputRef}
                    style={{
                      flex: 1,
                      color: 'black',
                      paddingHorizontal: 15,
                      borderWidth: 1,
                      borderColor: 'black',
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    placeholder="Enter your Password"
                    placeholderTextColor="#8b9cb5"
                    autoCapitalize="none"
                    keyboardType="default"
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={Keyboard.dismiss}
                    secureTextEntry={true}
                  />
                </View>
                {errorMsg ? (
                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontSize: 18,
                      marginVertical: 5,
                    }}>
                    {errorMsg}
                  </Text>
                ) : null}
                <TouchableOpacity
                  onPress={handleSubmitPress}
                  style={{
                    backgroundColor: '#7DE24E',
                    borderWidth: 0,
                    borderColor: '#7DE24E',
                    height: 40,
                    alignItems: 'center',
                    borderRadius: 30,
                    marginHorizontal: 30,
                    marginVertical: 20,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 18, paddingVertical: 10}}>
                    Login
                  </Text>
                </TouchableOpacity>
                <Text
                  onPress={navigateToRegister}
                  style={{
                    color: 'blue',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    padding: 10,
                  }}>
                  New Here ? Register
                </Text>
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
