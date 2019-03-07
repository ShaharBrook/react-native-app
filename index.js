import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/app/app';

export default function Main() {
  return (
      <App />
  );
}

AppRegistry.registerComponent('main', () => Main);