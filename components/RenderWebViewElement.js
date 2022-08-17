/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {WebView} from 'react-native-webview';
import ActivityIndicatorElement from './ActivityIndicator';
const RenderWebViewElement = ({index}) => {
  if (index === 1) {
    return (
      <WebView
        style={{flex: 1, marginTop: 20}}
        originWhitelist={['*']}
        source={{uri: 'https://aboutreact.com'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={ActivityIndicatorElement}
        startInLoadingState={true}
      />
    );
  } else if (index === 2) {
    return (
      <WebView
        style={{flex: 1}}
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={ActivityIndicatorElement}
      />
    );
  }
};

export default RenderWebViewElement;
