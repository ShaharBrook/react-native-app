import React from 'react';
import { Header } from 'react-native-elements';

export default class MyHeader extends React.Component {
  render() {
    return (
        <Header backgroundColor='#F9FBF8'
        leftComponent={{ icon: 'menu'}}
        centerComponent={{ text: 'My Kids' }}
        />
    );
  }
}