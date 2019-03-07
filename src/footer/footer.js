import React from 'react';
import { Header } from 'react-native-elements';
import MyButton from '../shared/my-button/myButton';

export default class MyFooter extends React.Component {
  render() {
    return (
        <Header backgroundColor='#F9FBF8' 
        leftComponent={<MyButton iconName="center-focus-weak" text='Scan' />}
        rightComponent={<MyButton iconName="location-on" text='Locate' />}
        containerStyle={{
            justifyContent: 'space-between',
          }}  
        />
    );
  }
}