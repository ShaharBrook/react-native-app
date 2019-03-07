import React from 'react';
import { Header } from 'react-native-elements';
import MyKidsLogo from './my-kids-logo/myKidsLogo';

export default class MyHeader extends React.Component {
  render() {
    return (
        <Header backgroundColor='#F9FBF8'
        leftComponent={{ icon: 'menu'}}
        centerComponent={<MyKidsLogo/>}
        />
    );
  }
}