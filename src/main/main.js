import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardsContainer from '../cards-container/cardsContainer';
import MyHeader from '../header/header';
import MyFooter from '../footer/footer';

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader/>
        <ScrollView>
          <CardsContainer/>
        </ScrollView>
        <MyFooter/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
