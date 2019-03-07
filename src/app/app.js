import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyCard from '../card/card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
