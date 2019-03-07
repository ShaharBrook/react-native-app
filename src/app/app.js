import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardsContainer from '../cards-container/cardsContainer';

export default class App extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <CardsContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
