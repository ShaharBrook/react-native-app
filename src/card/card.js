import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const CONTAINER_HEIGHT = 100;

export default function MyCard() {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <Text>{'Title M'}</Text>
          <Text>{'Subtitle'}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  cardContainer: { 
    height: CONTAINER_HEIGHT, 
    margin: 24,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: CONTAINER_HEIGHT,
    height: CONTAINER_HEIGHT,
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }
});