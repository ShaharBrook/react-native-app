import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardsContainer from '../cards-container/cardsContainer';

export default class App extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <ScrollView>
          <CardsContainer/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
