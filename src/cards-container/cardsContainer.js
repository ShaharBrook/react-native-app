import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyCard from '../card/card';

const data = [
    {
      "title": "Raz's top apps of the week",
      "subitile": "Find out some more about Raz",
      "icon": "https://cataas.com/cat?width=94&height=97&z=1",
      "type": "funfact",
      "child" : "Raz",
      "timestamp": 1548572414000
    },
    {
      "title": "Heads-up, is Raz sleeping enough?",
      "subitile": "Find out some more about Raz",
      "icon": "https://cataas.com/cat?width=94&height=97&z=2",
      "type": "alert",
      "child" : "Raz",
      "timestamp": 1548525614000
    },
    {
      "title": "Raz's Activities",
      "subitile": "We're happy to have you here",
      "icon": "https://cataas.com/cat?width=94&height=97&z=3",
      "child" : "Raz",
      "timestamp": 1548511214000
    },
    {
      "title": "Raz's faviourite game",
      "subitile": "Find out some more about Raz",
      "icon": "https://cataas.com/cat?width=94&height=97&z=4",
      "type": "funfact",
      "child" : "Raz",
      "timestamp": 1548446414000
    },
    {
      "title": "Raz is gone!",
      "subitile": "He is not at school!",
      "icon": "https://cataas.com/cat?width=94&height=97&z=5",
      "type": "headsup",
      "child" : "Raz",
      "timestamp": 1548424814000
    },
    {
      "title": "Raz Weekly report",
      "subitile": "Everything he did this week",
      "icon": "https://cataas.com/cat?width=94&height=97&z=6",
      "type": "weekly",
      "child" : "Raz",
      "timestamp": 1548397214000
    }
  ];

export default class CardsContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            {
                data.map(
                    (cardData, index) => <MyCard 
                        key={`card-${index}`}
                        {...cardData}/>
                )
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    height: '100%',
    overflow: 'scroll',
    backgroundColor: '#F7F9F6',
    },
});
  