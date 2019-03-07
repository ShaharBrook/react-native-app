import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function MyCard({title, subitile, icon, timestamp}) {
    const parseTimestamp = (timestamp) => (new Date(timestamp)).toGMTString();
    
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: icon }}
        />
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
          <Text>{subitile}</Text>
          <View style={styles.timestamp}>
            <Text style={{color: '#b0b0b0' }}>{parseTimestamp(timestamp)}</Text>
          </View>
        </View>
      </View>
    );
}

const CARD_CONTAINER_HEIGHT = 125;
const BORDER_RADIUS = 10;
const TEXT_CONTAINER_PADDING = 10;
const CARD_MARGIN = 12;

const styles = StyleSheet.create({
  cardContainer: { 
    height: CARD_CONTAINER_HEIGHT, 
    marginTop: CARD_MARGIN,
    marginRight: CARD_MARGIN,
    marginLeft: CARD_MARGIN,
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: CARD_CONTAINER_HEIGHT,
    height: CARD_CONTAINER_HEIGHT,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  textContainer: { 
    flex: 1,
    position: 'relative',
    padding: TEXT_CONTAINER_PADDING,
    backgroundColor: '#F3F3F3',
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  timestamp: {
    position: 'absolute',
    bottom: TEXT_CONTAINER_PADDING,
    left: TEXT_CONTAINER_PADDING,
  }
});