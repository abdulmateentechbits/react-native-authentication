/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

const Loader = (props) => {
  const {loading, ...attributes} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#00000040',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <ActivityIndicator
            animating={true}
            size="large"
            color="#000000"
            style={{
              alignItems: 'center',
              height: 80,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
