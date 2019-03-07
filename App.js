import React from 'react';
import { AppRegistry } from 'react-native';
import VisibleApp from './src/app/app';

export default function App() {
  return (
      <VisibleApp />
  );
}

AppRegistry.registerComponent('main', () => App);