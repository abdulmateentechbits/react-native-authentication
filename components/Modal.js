/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Modals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
          position: 'relative',
        }}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={showModal}
          useNativeDriver={true}
          onRequestClose={() => {
            console.log('Modal has been closed');
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#00ff00',
              padding: 100,
              width: 350,
              height: 350,
              borderRadius: 50,
              position: 'absolute',
              top: 90,
              left: 20,
            }}>
            <Text>Modal is open</Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent:'center',
                backgroundColor: 'gray',
                width: 35,
                height: 35,
                borderRadius:100,
                padding:5,
                position:'absolute',
                right:0,
                top:0,
              }}>
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Text style={{fontSize: 20, color:'white'}}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{position: 'absolute', bottom: 50}}>
          <Button title="Open Modal" onPress={() => setShowModal(!showModal)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Modals;

const styles = StyleSheet.create({});
