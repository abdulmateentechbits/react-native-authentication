/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Loader from './Components/loader';
import {TextInput} from 'react-native-gesture-handler';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegisteration, setIsRegisteration] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  // refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);

  // Registration process
  const registerHandler = () => {
    setErrorMsg('');
    if (!name) {
      alert('Please fill name');
    }
    if (!email) {
      alert('Please fill email');
    }
    if (!password) {
      alert('Please fill password');
    }
    if (!age) {
      alert('Please fill age');
    }
    if (!address) {
      alert('Please fill address');
    }
    let bodyData = {
      name: name,
      email: email,
      age: age,
      address: address,
      password: password,
    };
    bodyData = new URLSearchParams(bodyData).toString();
    console.log('BodyData: ', bodyData);
    // show the loader until registration process is successful or error occur
    setLoading(true);
    fetch('http://10.0.2.2:3000/api/user/register', {
      method: 'POST',
      body: bodyData,
      headers: {
        'Content-Type': 'Application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.status)
      .then(responseResult => {
        console.log('responseResult: ',responseResult);
        if (responseResult == '200') {
          setIsRegisteration(true);
          setLoading(false);
        } else {
          setErrorMsg('Registration Failed try again');
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log('Error occur: ', error);
      });
  };

  // If registration Successful

  if (isRegisteration) {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#307ecc'}}>
        <Image
          source={require('../images/success.png')}
          style={{height: 150, resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Text style={styles.successTextStyle}>Registration Successful</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="black" />
      <Loader loading={loading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 28,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Register here
          </Text>
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailRef.current && emailRef.current.focus()
              }
              value={name}
              onChangeText={UserName => setName(UserName)}
              blurOnSubmit={true}
              ref={nameRef}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              returnKeyType="next"
              value={email}
              onChangeText={userEmail => setEmail(userEmail)}
              ref={emailRef}
              onSubmitEditing={() =>
                passwordRef.current && passwordRef.current.focus()
              }
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              secureTextEntry={true}
              value={password}
              onChangeText={userPassword => setPassword(userPassword)}
              ref={passwordRef}
              onSubmitEditing={() => ageRef.current && ageRef.current.focus()}
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Age"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              returnKeyType="next"
              value={age}
              onChangeText={userAge => setAge(userAge)}
              ref={ageRef}
              onSubmitEditing={() =>
                addressRef.current && addressRef.current.focus()
              }
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              value={address}
              onChangeText={userAddress => setAddress(userAddress)}
              ref={addressRef}
            />
          </View>
          {errorMsg != '' ? (
            <Text style={styles.errorTextStyle}>{errorMsg}</Text>
          ) : null}
          <TouchableOpacity
            onPress={registerHandler}
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 25,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
    shadowColor: '#CECECE',
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'lightblue',
    textAlign: 'center',
    letterSpacing: 3,
    fontSize: 28,
    padding: 30,
  },
});

export default RegisterScreen;
