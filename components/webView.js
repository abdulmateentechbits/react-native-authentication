/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View,SafeAreaView, Button, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import React, {useState} from 'react';
import ActivityIndicatorElement from './ActivityIndicator';

const WebViewComponent = () => {
    const [visible, setVisible] = useState(false);
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <WebView
            style={{flex: 1}}
            //Loading URL
            source={{uri: 'https://aboutreact.com/'}}
            //Enable Javascript support
            javaScriptEnabled={true}
            //For the Cache
            domStorageEnabled={true}
            onLoadStart={() => setVisible(true)}
            onLoad={() => setVisible(false)}
          />
          {visible ? <ActivityIndicatorElement /> : null}
        </View>
      </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
    },
  });

export default WebViewComponent;
