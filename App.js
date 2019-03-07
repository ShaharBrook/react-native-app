import React from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/main/main';

export default function App() {
  return (
      <Main />
  );
}

AppRegistry.registerComponent('main', () => App);